import mergeAllOf from 'json-schema-merge-allof';
import fill from 'core-js-pure/features/array/fill';
import union from 'lodash/union';
import jsonpointer from 'jsonpointer';
import validateFormData, { isValid } from './validate';

type Schema = import('json-schema').JSONSchema7;
type UiSchema = import('./types').UiSchema;
type Widget = import('./types').Widget;
type Registry = import('./types').Registry;

export const ADDITIONAL_PROPERTY_FLAG = '__additional_property';


export function canExpand(schema: Schema, uiSchema: UiSchema, formData: any) {
	if (!schema.additionalProperties) {
		return false;
	}
	const { expandable } = getUiOptions(uiSchema);
	if (expandable === false) {
		return expandable;
	}
	// if ui:options.expandable was not explicitly set to false, we can add
	// another property if we have not exceeded maxProperties yet
	if (schema.maxProperties !== undefined) {
		return Object.keys(formData).length < schema.maxProperties;
	}
	return true;
}

/**
 * Gets the type of a given schema.
 */
export function getSchemaType(schema: Schema) {
	const { type } = schema;

	if (!type && schema.const) {
		return guessType(schema.const);
	}

	if (!type && schema.enum) {
		return 'string';
	}

	if (!type && (schema.properties || schema.additionalProperties)) {
		return 'object';
	}

	if (type instanceof Array && type.length === 2 && type.includes('null')) {
		return type.find((type) => type !== 'null');
	}

	return type;
}

/**
 *
 */
function computeDefaults<T = any>(
	_schema: Schema,
	parentDefaults: Schema['default'][],
	// definitions: Registry['definitions'],
	rootSchema: Schema,
	rawFormData: T,
	includeUndefinedValues = false
) {
	let schema = isObject(_schema) ? _schema : {};
	const formData = isObject(rawFormData) ? rawFormData : {};
	// Compute the defaults recursively: give highest priority to deepest nodes.
	let defaults = parentDefaults;
	if (isObject(defaults) && isObject(schema.default)) {
		// For object defaults, only override parent defaults that are defined in
		// schema.default.
		defaults = mergeObjects(defaults, schema.default);
	} else if ('default' in schema) {
		// Use schema defaults for this node.
		defaults = schema.default;
	} else if ('$ref' in schema) {
		// Use referenced schema defaults for this node.
		const refSchema = findSchemaDefinition(schema.$ref, rootSchema);
		return computeDefaults(refSchema, defaults, rootSchema, formData, includeUndefinedValues);
	} else if ('dependencies' in schema) {
		const resolvedSchema = resolveDependencies(schema, rootSchema, formData);
		return computeDefaults(resolvedSchema, defaults, rootSchema, formData, includeUndefinedValues);
	} else if (isFixedItems(schema)) {
		defaults = schema.items.map((itemSchema, idx) =>
			computeDefaults(
				itemSchema,
				Array.isArray(parentDefaults) ? parentDefaults[idx] : undefined,
				rootSchema,
				formData,
				includeUndefinedValues
			)
		);
	} else if ('oneOf' in schema) {
		schema = schema.oneOf[getMatchingOption(undefined, schema.oneOf, rootSchema)];
	} else if ('anyOf' in schema) {
		schema = schema.anyOf[getMatchingOption(undefined, schema.anyOf, rootSchema)];
	}

	// Not defaults defined for this node, fallback to generic typed ones.
	if (typeof defaults === 'undefined') {
		defaults = schema.default;
	}

	switch (getSchemaType(schema)) {
		// We need to recur for object schema inner default values.
		case 'object':
			return Object.keys(schema.properties || {}).reduce((acc, key) => {
				// Compute the defaults for this node, with the parent defaults we might
				// have from a previous run: defaults[key].
				const computedDefault = computeDefaults(
					schema.properties[key],
					(defaults || {})[key],
					rootSchema,
					(formData || {})[key],
					includeUndefinedValues
				);
				if (includeUndefinedValues || computedDefault !== undefined) {
					acc[key] = computedDefault;
				}
				return acc;
			}, {});

		case 'array':
			// Inject defaults into existing array defaults
			if (Array.isArray(defaults)) {
				defaults = defaults.map((item, idx) => {
					return computeDefaults(
						schema.items[idx] || schema.additionalItems || {},
						item,
						rootSchema
					);
				});
			}

			// Deeply inject defaults into already existing form data
			if (Array.isArray(rawFormData)) {
				defaults = rawFormData.map((item, idx) => {
					return computeDefaults(schema.items, (defaults || {})[idx], rootSchema, item);
				});
			}
			if (schema.minItems) {
				if (!isMultiSelect(schema, rootSchema)) {
					const defaultsLength = defaults ? defaults.length : 0;
					if (schema.minItems > defaultsLength) {
						const defaultEntries = defaults || [];
						// populate the array with the defaults
						const fillerSchema = Array.isArray(schema.items)
							? schema.additionalItems
							: schema.items;
						const fillerEntries = fill(
							new Array(schema.minItems - defaultsLength),
							computeDefaults(fillerSchema, fillerSchema.defaults, rootSchema)
						);
						// then fill up the rest with either the item default or empty, up to minItems

						return defaultEntries.concat(fillerEntries);
					}
				} else {
					return defaults || [];
				}
			}
	}
	return defaults;
}

/**
 *
 */
export function getDefaultFormState<T = any>(
	_schema: Schema,
	formData: T,
	rootSchema: Schema = {},
	includeUndefinedValues = false
) {
	if (!isObject(_schema)) {
		throw new Error(`Invalid schema: ${_schema}`);
	}
	const schema = retrieveSchema(_schema, rootSchema, formData);
	const defaults = computeDefaults(
		schema,
		_schema.default,
		rootSchema,
		formData,
		includeUndefinedValues
	);
	if (typeof formData === 'undefined') {
		// No form data? Use schema defaults.
		return defaults;
	}
	if (isObject(formData) || Array.isArray(formData)) {
		return mergeDefaultsWithFormData(defaults, formData);
	}
	if (formData === 0 || formData === false || formData === '') {
		return formData;
	}
	return formData || defaults;
}

/**
 * When merging defaults and form data, we want to merge in this specific way:
 * - objects are deeply merged
 * - arrays are merged in such a way that:
 *   - when the array is set in form data, only array entries set in form data
 *     are deeply merged; additional entries from the defaults are ignored
 *   - when the array is not set in form data, the default is copied over
 * - scalars are overwritten/set by form data
 */
export function mergeDefaultsWithFormData<T = any>(defaults: any, formData: T) {
	if (Array.isArray(formData)) {
		if (!Array.isArray(defaults)) {
			defaults = [];
		}
		return formData.map((value, idx) => {
			if (defaults[idx]) {
				return mergeDefaultsWithFormData(defaults[idx], value);
			}
			return value;
		});
	}
	if (isObject(formData)) {
		const acc = { ...defaults }; // Prevent mutation of source object.
		return Object.keys(formData).reduce((acc, key) => {
			acc[key] = mergeDefaultsWithFormData(defaults ? defaults[key] : {}, formData[key]);
			return acc;
		}, acc);
	}
	return formData;
}

/**
 *
 */
export function getUiOptions(uiSchema: UiSchema): {
	widget?: string;
	options?: {
		[key: string]: any;
	};
	[key: string]: any;
} {
	// get all passed options from ui:widget, ui:options, and ui:<optionName>
	return Object.keys(uiSchema)
		.filter((key) => key.indexOf('ui:') === 0)
		.reduce((options, key) => {
			const value = uiSchema[key];
			if (key === 'ui:widget' && isObject(value)) {
				console.warn('Setting options via ui:widget object is deprecated, use ui:options instead');
				return {
					...options,
					...(value.options || {}),
					widget: value.component,
				};
			}
			if (key === 'ui:options' && isObject(value)) {
				return { ...options, ...value };
			}
			return { ...options, [key.substring(3)]: value };
		}, {});
}

/**
 *
 */
export function getDisplayLabel(schema: Schema, uiSchema: UiSchema, rootSchema?: Schema) {
	const uiOptions = getUiOptions(uiSchema);
	let { label: displayLabel = true } = uiOptions;
	const schemaType = getSchemaType(schema);

	if (schemaType === 'array') {
		displayLabel = isMultiSelect(schema, rootSchema) || isFilesArray(schema, uiSchema, rootSchema);
	}

	if (schemaType === 'object') {
		displayLabel = false;
	}
	if (schemaType === 'boolean' && !uiSchema['ui:widget']) {
		displayLabel = false;
	}
	if (uiSchema['ui:field']) {
		displayLabel = false;
	}
	return displayLabel;
}

/**
 *
 */
export function isObject(thing: any) {
	if (typeof File !== 'undefined' && thing instanceof File) {
		return false;
	}
	return typeof thing === 'object' && thing !== null && !Array.isArray(thing);
}

/**
 *
 */
export function mergeObjects(
	obj1: Record<string, unknown>,
	obj2: Record<string, unknown>,
	concatArrays = false
) {
	// Recursively merge deeply nested objects.
	const acc = { ...obj1 }; // Prevent mutation of source object.
	return Object.keys(obj2).reduce((acc, key) => {
		const left = obj1 ? obj1[key] : {};
		const right = obj2[key];
		if (obj1 && obj1.hasOwnProperty(key) && isObject(right)) {
			acc[key] = mergeObjects(left, right, concatArrays);
		} else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
			acc[key] = left.concat(right);
		} else {
			acc[key] = right;
		}
		return acc;
	}, acc);
}

/**
 *
 */
export function asNumber(value: string | null) {
	if (value === '') {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	if (/\.$/.test(value)) {
		// "3." can't really be considered a number even if it parses in js. The
		// user is most likely entering a float.
		return value;
	}
	if (/\.0$/.test(value)) {
		// we need to return this as a string here, to allow for input like 3.07
		return value;
	}
	const n = Number(value);
	const valid = typeof n === 'number' && !Number.isNaN(n);

	if (/\.\d*0$/.test(value)) {
		// It's a number, that's cool - but we need it as a string so it doesn't screw
		// with the user when entering dollar amounts or other values (such as those with
		// specific precision or number of significant digits)
		return value;
	}

	return valid ? n : value;
}

/**
 *
 */
export function orderProperties(properties: Record<string, unknown>[], order: []) {
	if (!Array.isArray(order)) {
		return properties;
	}

	const arrayToHash = (arr) =>
		arr.reduce((prev, curr) => {
			prev[curr] = true;
			return prev;
		}, {});
	const errorPropList = (arr) =>
		arr.length > 1 ? `properties '${arr.join("', '")}'` : `property '${arr[0]}'`;
	const propertyHash = arrayToHash(properties);
	const orderFiltered = order.filter((prop) => prop === '*' || propertyHash[prop]);
	const orderHash = arrayToHash(orderFiltered);

	const rest = properties.filter((prop) => !orderHash[prop]);
	const restIndex = orderFiltered.indexOf('*');
	if (restIndex === -1) {
		if (rest.length) {
			throw new Error(`uiSchema order list does not contain ${errorPropList(rest)}`);
		}
		return orderFiltered;
	}
	if (restIndex !== orderFiltered.lastIndexOf('*')) {
		throw new Error('uiSchema order list contains more than one wildcard item');
	}

	const complete = [...orderFiltered];
	complete.splice(restIndex, 1, ...rest);
	return complete;
}

/**
 * This function checks if the given schema matches a single
 * constant value.
 */
export function isConstant(schema: Schema) {
	return (Array.isArray(schema.enum) && schema.enum.length === 1) || schema.hasOwnProperty('const');
}

/**
 *
 */
export function toConstant(schema: Schema) {
	if (Array.isArray(schema.enum) && schema.enum.length === 1) {
		return schema.enum[0];
	}
	if (schema.hasOwnProperty('const')) {
		return schema.const;
	}
	throw new Error('schema cannot be inferred as a constant');
}

/**
 *
 */
export function isSelect(_schema: Schema, rootSchema?: Schema) {
	const schema = retrieveSchema(_schema, rootSchema);
	const altSchemas = schema.oneOf || schema.anyOf;
	if (Array.isArray(schema.enum)) {
		return true;
	}
	if (Array.isArray(altSchemas)) {
		return altSchemas.every((altSchemas) => isConstant(altSchemas));
	}
	return false;
}

/**
 *
 */
export function isMultiSelect(schema: Schema, rootSchema?: Schema) {
	if (!schema.uniqueItems || !schema.items) {
		return false;
	}
	return isSelect(schema.items, rootSchema);
}

/**
 *
 */
export function isFilesArray(schema: Schema, uiSchema: UiSchema, rootSchema?: Schema) {
	if (uiSchema['ui:widget'] === 'files') {
		return true;
	}
	if (schema.items) {
		const itemsSchema = retrieveSchema(schema.items, rootSchema);
		return itemsSchema.type === 'string' && itemsSchema.format === 'data-url';
	}
	return false;
}

/**
 *
 */
export function isFixedItems(schema: Schema) {
	return (
		Array.isArray(schema.items) &&
		schema.items.length > 0 &&
		schema.items.every((item) => isObject(item))
	);
}

/**
 *
 */
export function isCustomWidget(uiSchema: UiSchema) {
	return (
		// TODO: Remove the `&& uiSchema["ui:widget"] !== "hidden"` once we support hidden widgets for arrays.
		// https://react-jsonschema-form.readthedocs.io/en/latest/usage/widgets/#hidden-widgets
		'widget' in getUiOptions(uiSchema) && getUiOptions(uiSchema).widget !== 'hidden'
	);
}

/**
 *
 */
export function allowAdditionalItems(schema: Schema) {
	if (schema.additionalItems === true) {
		console.warn('additionalItems=true is currently not supported');
	}
	return isObject(schema.additionalItems);
}

/**
 *
 */
export function optionsList(schema: Schema) {
	if (schema.enum) {
		return schema.enum.map((value, i) => {
			let label = String(value);
			if (schema.enumNames && schema.enumNames[i]) {
				label = schema.enumNames[i];
			}
			return { label, value };
		});
	}
	const altSchemas = schema.oneOf || schema.anyOf;
	return altSchemas.map((schema, i) => {
		const value = toConstant(schema);
		const label = schema.title || String(value);
		return {
			schema,
			label,
			value,
		};
	});
}

/**
 *
 */
export function findSchemaDefinition($ref: string, rootSchema: Schema) {
	const origRef = $ref;
	if ($ref.startsWith('#')) {
		// Decode URI fragment representation.
		$ref = decodeURIComponent($ref.substring(1));
	} else {
		throw new Error(`Could not find a definition for ${origRef}.`);
	}
	const current = jsonpointer.get(rootSchema, $ref);
	if (current === undefined) {
		throw new Error(`Could not find a definition for ${origRef}.`);
	}
	if (current.hasOwnProperty('$ref')) {
		return findSchemaDefinition(current.$ref, rootSchema);
	}
	return current;
}

// In the case where we have to implicitly create a schema, it is useful to know what type to use
//  based on the data we are defining
export const guessType = function guessType(value: any) {
	if (Array.isArray(value)) {
		return 'array';
	}
	if (typeof value === 'string') {
		return 'string';
	}
	if (value == null) {
		return 'null';
	}
	if (typeof value === 'boolean') {
		return 'boolean';
	}
	if (!Number.isNaN(value)) {
		return 'number';
	}
	if (typeof value === 'object') {
		return 'object';
	}
	// Default to string if we can't figure it out
	return 'string';
};

// This function will create new "properties" items for each key in our formData
export function stubExistingAdditionalProperties<T = any>(
	_schema: Schema,
	rootSchema?: Schema,
	_formData: T
) {
	// Clone the schema so we don't ruin the consumer's original
	const schema = {
		..._schema,
		properties: { ..._schema.properties },
	};

	// make sure formData is an object
	const formData = isObject(_formData) ? _formData : {};

	Object.keys(formData).forEach((key) => {
		if (schema.properties.hasOwnProperty(key)) {
			// No need to stub, our schema already has the property
			return;
		}

		let additionalProperties;
		if (schema.additionalProperties.hasOwnProperty('$ref')) {
			additionalProperties = retrieveSchema(
				{ $ref: schema.additionalProperties.$ref },
				rootSchema,
				formData
			);
		} else if (schema.additionalProperties.hasOwnProperty('type')) {
			additionalProperties = { ...schema.additionalProperties };
		} else {
			additionalProperties = { type: guessType(formData[key]) };
		}

		// The type of our new key should match the additionalProperties value;
		schema.properties[key] = additionalProperties;
		// Set our additional property flag so we know it was dynamically added
		schema.properties[key][ADDITIONAL_PROPERTY_FLAG] = true;
	});

	return schema;
}

/**
 *
 */
export function resolveSchema<T = any>(schema: Schema, rootSchema?: Schema, formData: T) {
	if (schema.hasOwnProperty('$ref')) {
		return resolveReference(schema, rootSchema, formData);
	}
	if (schema.hasOwnProperty('dependencies')) {
		const resolvedSchema = resolveDependencies(schema, rootSchema, formData);
		return retrieveSchema(resolvedSchema, rootSchema, formData);
	}
	if (schema.hasOwnProperty('allOf')) {
		return {
			...schema,
			allOf: schema.allOf.map((allOfSubschema) =>
				retrieveSchema(allOfSubschema, rootSchema, formData)
			),
		};
	}
	// No $ref or dependencies attribute found, returning the original schema.
	return schema;
}

/**
 *
 */
function resolveReference<T = any>(schema: Schema, rootSchema?: Schema, formData: T) {
	// Retrieve the referenced schema definition.
	const $refSchema = findSchemaDefinition(schema.$ref, rootSchema);
	// Drop the $ref property of the source schema.
	const { $ref, ...localSchema } = schema;
	// Update referenced schema definition with local schema properties.
	return retrieveSchema({ ...$refSchema, ...localSchema }, rootSchema, formData);
}

/**
 *
 */
export function retrieveSchema<T = any>(schema: Schema, rootSchema?: Schema, formData: T): Schema {
	if (!isObject(schema)) {
		return {};
	}
	let resolvedSchema = resolveSchema(schema, rootSchema, formData);
	if ('allOf' in schema) {
		try {
			resolvedSchema = mergeAllOf({
				...resolvedSchema,
				allOf: resolvedSchema.allOf,
			});
		} catch (e) {
			console.warn(`could not merge subschemas in allOf:\n${e}`);
			const { allOf, ...resolvedSchemaWithoutAllOf } = resolvedSchema;
			return resolvedSchemaWithoutAllOf;
		}
	}
	const hasAdditionalProperties =
		resolvedSchema.hasOwnProperty('additionalProperties') &&
		resolvedSchema.additionalProperties !== false;
	if (hasAdditionalProperties) {
		return stubExistingAdditionalProperties(resolvedSchema, rootSchema, formData);
	}
	return resolvedSchema;
}

/**
 *
 */
function resolveDependencies<T = any>(schema: Schema, rootSchema?: Schema, formData: T): Schema {
	// Drop the dependencies from the source schema.
	let { dependencies = {}, ...resolvedSchema } = schema;
	if ('oneOf' in resolvedSchema) {
		resolvedSchema =
			resolvedSchema.oneOf[getMatchingOption(formData, resolvedSchema.oneOf, rootSchema)];
	} else if ('anyOf' in resolvedSchema) {
		resolvedSchema =
			resolvedSchema.anyOf[getMatchingOption(formData, resolvedSchema.anyOf, rootSchema)];
	}
	return processDependencies(dependencies, resolvedSchema, rootSchema, formData);
}

/**
 *
 */
function processDependencies<T = any>(
	dependencies,
	resolvedSchema: Schema,
	rootSchema?: Schema,
	formData: T
) {
	// Process dependencies updating the local schema properties as appropriate.
	for (const dependencyKey in dependencies) {
		// Skip this dependency if its trigger property is not present.
		if (formData[dependencyKey] === undefined) {
			continue;
		}
		// Skip this dependency if it is not included in the schema (such as when dependencyKey is itself a hidden dependency.)
		if (resolvedSchema.properties && !(dependencyKey in resolvedSchema.properties)) {
			continue;
		}
		const { [dependencyKey]: dependencyValue, ...remainingDependencies } = dependencies;
		if (Array.isArray(dependencyValue)) {
			resolvedSchema = withDependentProperties(resolvedSchema, dependencyValue);
		} else if (isObject(dependencyValue)) {
			resolvedSchema = withDependentSchema(
				resolvedSchema,
				rootSchema,
				formData,
				dependencyKey,
				dependencyValue
			);
		}
		return processDependencies(remainingDependencies, resolvedSchema, rootSchema, formData);
	}
	return resolvedSchema;
}

/**
 *
 */
function withDependentProperties(schema: Schema, additionallyRequired) {
	if (!additionallyRequired) {
		return schema;
	}
	const required = Array.isArray(schema.required)
		? Array.from(new Set([...schema.required, ...additionallyRequired]))
		: additionallyRequired;
	return { ...schema, required };
}

/**
 *
 */
function withDependentSchema<T = any>(
	schema: Schema,
	rootSchema: Schema,
	formData: T,
	dependencyKey: string,
	dependencyValue
) {
	const { oneOf, ...dependentSchema } = retrieveSchema(dependencyValue, rootSchema, formData);
	schema = mergeSchemas(schema, dependentSchema);
	// Since it does not contain oneOf, we return the original schema.
	if (oneOf === undefined) {
		return schema;
	}
	if (!Array.isArray(oneOf)) {
		throw new Error(`invalid: it is some ${typeof oneOf} instead of an array`);
	}
	// Resolve $refs inside oneOf.
	const resolvedOneOf = oneOf.map((subschema) =>
		subschema.hasOwnProperty('$ref') ? resolveReference(subschema, rootSchema, formData) : subschema
	);
	return withExactlyOneSubschema(schema, rootSchema, formData, dependencyKey, resolvedOneOf);
}

/**
 *
 */
function withExactlyOneSubschema<T = any>(
	schema: Schema,
	rootSchema: Schema,
	formData: T,
	dependencyKey: string,
	oneOf: any[]
) {
	const validSubschemas = oneOf.filter((subschema) => {
		if (!subschema.properties) {
			return false;
		}
		const { [dependencyKey]: conditionPropertySchema } = subschema.properties;
		if (conditionPropertySchema) {
			const conditionSchema = {
				type: 'object',
				properties: {
					[dependencyKey]: conditionPropertySchema,
				},
			};
			const { errors } = validateFormData(formData, conditionSchema);
			return errors.length === 0;
		}
	});
	if (validSubschemas.length !== 1) {
		console.warn(
			"ignoring oneOf in dependencies because there isn't exactly one subschema that is valid"
		);
		return schema;
	}
	const subschema = validSubschemas[0];
	const { [dependencyKey]: conditionPropertySchema, ...dependentSubschema } = subschema.properties;
	const dependentSchema = { ...subschema, properties: dependentSubschema };
	return mergeSchemas(schema, retrieveSchema(dependentSchema, rootSchema, formData));
}

// Recursively merge deeply nested schemas.
// The difference between mergeSchemas and mergeObjects
// is that mergeSchemas only concats arrays for
// values under the "required" keyword, and when it does,
// it doesn't include duplicate values.
export function mergeSchemas(obj1: Schema, obj2: Schema) {
	const acc = { ...obj1 }; // Prevent mutation of source object.
	return Object.keys(obj2).reduce((acc, key) => {
		const left = obj1 ? obj1[key] : {};
		const right = obj2[key];
		if (obj1 && obj1.hasOwnProperty(key) && isObject(right)) {
			acc[key] = mergeSchemas(left, right);
		} else if (
			obj1 &&
			obj2 &&
			(getSchemaType(obj1) === 'object' || getSchemaType(obj2) === 'object') &&
			key === 'required' &&
			Array.isArray(left) &&
			Array.isArray(right)
		) {
			// Don't include duplicate values when merging
			// "required" fields.
			acc[key] = union(left, right);
		} else {
			acc[key] = right;
		}
		return acc;
	}, acc);
}

/**
 *
 * @param object
 * @returns
 */
function isArguments(object: typeof Object) {
	return Object.prototype.toString.call(object) === '[object Arguments]';
}

/**
 *
 */
export function deepEquals(a: any, b: any, ca = [], cb = []) {
	// Partially extracted from node-deeper and adapted to exclude comparison
	// checks for functions.
	// https://github.com/othiym23/node-deeper
	if (a === b) {
		return true;
	}
	if (typeof a === 'function' || typeof b === 'function') {
		// Assume all functions are equivalent
		// see https://github.com/rjsf-team/react-jsonschema-form/issues/255
		return true;
	}
	if (typeof a !== 'object' || typeof b !== 'object') {
		return false;
	}
	if (a === null || b === null) {
		return false;
	}
	if (a instanceof Date && b instanceof Date) {
		return a.getTime() === b.getTime();
	}
	if (a instanceof RegExp && b instanceof RegExp) {
		return (
			a.source === b.source &&
			a.global === b.global &&
			a.multiline === b.multiline &&
			a.lastIndex === b.lastIndex &&
			a.ignoreCase === b.ignoreCase
		);
	}
	if (isArguments(a) || isArguments(b)) {
		if (!(isArguments(a) && isArguments(b))) {
			return false;
		}
		const { slice } = Array.prototype;
		return deepEquals(slice.call(a), slice.call(b), ca, cb);
	}
	if (a.constructor !== b.constructor) {
		return false;
	}

	const ka = Object.keys(a);
	const kb = Object.keys(b);
	// don't bother with stack acrobatics if there's nothing there
	if (ka.length === 0 && kb.length === 0) {
		return true;
	}
	if (ka.length !== kb.length) {
		return false;
	}

	let cal = ca.length;
	while (cal--) {
		if (ca[cal] === a) {
			return cb[cal] === b;
		}
	}
	ca.push(a);
	cb.push(b);

	ka.sort();
	kb.sort();
	for (let j = ka.length - 1; j >= 0; j--) {
		if (ka[j] !== kb[j]) {
			return false;
		}
	}

	let key;
	for (let k = ka.length - 1; k >= 0; k--) {
		key = ka[k];
		if (!deepEquals(a[key], b[key], ca, cb)) {
			return false;
		}
	}

	ca.pop();
	cb.pop();

	return true;
}

/**
 *
 */
export function shouldRender(comp, nextProps, nextState) {
	const { props, state } = comp;
	return !deepEquals(props, nextProps) || !deepEquals(state, nextState);
}

/**
 *
 */
export function toIdSchema<T = any>(
	schema: Schema,
	id: string,
	rootSchema: Schema,
	formData: T,
	idPrefix?: string,
	idSeparator = '.'
) {
	const idSchema = {
		$id: id || idPrefix,
	};
	if ('$ref' in schema || 'dependencies' in schema || 'allOf' in schema) {
		const _schema = retrieveSchema(schema, rootSchema, formData);
		return toIdSchema(_schema, id, rootSchema, formData, idPrefix);
	}
	if ('items' in schema && !schema.items.$ref) {
		return toIdSchema(schema.items, id, rootSchema, formData, idPrefix);
	}
	if (schema.type !== 'object') {
		return idSchema;
	}
	for (const name in schema.properties || {}) {
		const field = schema.properties[name];
		const fieldId = `${idSchema.$id}${idSeparator}${name}`;
		idSchema[name] = toIdSchema(
			isObject(field) ? field : {},
			fieldId,
			rootSchema,
			// It's possible that formData is not an object -- this can happen if an
			// array item has just been added, but not populated with data yet
			(formData || {})[name],
			idPrefix
		);
	}
	return idSchema;
}

/**
 *
 */
export function toPathSchema<T = any>(schema: Schema, name = '', rootSchema: Schema, formData: T) {
	const pathSchema = {
		$name: name.replace(/^\./, ''),
	};
	if ('$ref' in schema || 'dependencies' in schema || 'allOf' in schema) {
		const _schema = retrieveSchema(schema, rootSchema, formData);
		return toPathSchema(_schema, name, rootSchema, formData);
	}

	if (schema.hasOwnProperty('additionalProperties')) {
		pathSchema.__rjsf_additionalProperties = true;
	}

	if (schema.hasOwnProperty('items') && Array.isArray(formData)) {
		formData.forEach((element, i) => {
			pathSchema[i] = toPathSchema(schema.items, `${name}.${i}`, rootSchema, element);
		});
	} else if (schema.hasOwnProperty('properties')) {
		for (const property in schema.properties) {
			pathSchema[property] = toPathSchema(
				schema.properties[property],
				`${name}.${property}`,
				rootSchema,
				// It's possible that formData is not an object -- this can happen if an
				// array item has just been added, but not populated with data yet
				(formData || {})[property]
			);
		}
	}
	return pathSchema;
}

/**
 *
 */
export function parseDateString(dateString: string, includeTime = true) {
	if (!dateString) {
		return {
			year: -1,
			month: -1,
			day: -1,
			hour: includeTime ? -1 : 0,
			minute: includeTime ? -1 : 0,
			second: includeTime ? -1 : 0,
		};
	}
	const date = new Date(dateString);
	if (Number.isNaN(date.getTime())) {
		throw new Error(`Unable to parse date ${dateString}`);
	}
	return {
		year: date.getUTCFullYear(),
		month: date.getUTCMonth() + 1, // oh you, javascript.
		day: date.getUTCDate(),
		hour: includeTime ? date.getUTCHours() : 0,
		minute: includeTime ? date.getUTCMinutes() : 0,
		second: includeTime ? date.getUTCSeconds() : 0,
	};
}

/**
 *
 */
export function toDateString({ year, month, day, hour = 0, minute = 0, second = 0 }, time = true) {
	const utcTime = Date.UTC(year, month - 1, day, hour, minute, second);
	const datetime = new Date(utcTime).toJSON();
	return time ? datetime : datetime.slice(0, 10);
}

/**
 *
 */
export function utcToLocal(jsonDate) {
	if (!jsonDate) {
		return '';
	}

	// required format of `"yyyy-MM-ddThh:mm" followed by optional ":ss" or ":ss.SSS"
	// https://html.spec.whatwg.org/multipage/input.html#local-date-and-time-state-(type%3Ddatetime-local)
	// > should be a _valid local date and time string_ (not GMT)

	// Note - date constructor passed local ISO-8601 does not correctly
	// change time to UTC in node pre-8
	const date = new Date(jsonDate);

	const yyyy = pad(date.getFullYear(), 4);
	const MM = pad(date.getMonth() + 1, 2);
	const dd = pad(date.getDate(), 2);
	const hh = pad(date.getHours(), 2);
	const mm = pad(date.getMinutes(), 2);
	const ss = pad(date.getSeconds(), 2);
	const SSS = pad(date.getMilliseconds(), 3);

	return `${yyyy}-${MM}-${dd}T${hh}:${mm}:${ss}.${SSS}`;
}

/**
 *
 */
export function localToUTC(dateString: string) {
	if (dateString) {
		return new Date(dateString).toJSON();
	}
}

/**
 *
 */
export function pad(num: number, size: number) {
	let s = String(num);
	while (s.length < size) {
		s = `0${s}`;
	}
	return s;
}

/**
 *
 */
export function dataURItoBlob(dataURI: string) {
	// Split metadata from data
	const splitted = dataURI.split(',');
	// Split params
	const params = splitted[0].split(';');
	// Get mime-type from params
	const type = params[0].replace('data:', '');
	// Filter the name property from params
	const properties = params.filter((param) => {
		return param.split('=')[0] === 'name';
	});
	// Look for the name and use unknown if no name property.
	let name;
	if (properties.length !== 1) {
		name = 'unknown';
	} else {
		// Because we filtered out the other property,
		// we only have the name case here.
		name = properties[0].split('=')[1];
	}

	// Built the Uint8Array Blob parameter from the base64 string.
	const binary = atob(splitted[1]);
	const array = [];
	for (let i = 0; i < binary.length; i++) {
		array.push(binary.charCodeAt(i));
	}
	// Create the blob object
	const blob = new window.Blob([new Uint8Array(array)], { type });

	return { blob, name };
}

/**
 *
 */
export function rangeSpec(schema: Schema) {
	const spec = {};
	if (schema.multipleOf) {
		spec.step = schema.multipleOf;
	}
	if (schema.minimum || schema.minimum === 0) {
		spec.min = schema.minimum;
	}
	if (schema.maximum || schema.maximum === 0) {
		spec.max = schema.maximum;
	}
	return spec;
}

/**
 *
 */
export function getMatchingOption<T = any>(
	formData: T,
	options: Record<string, unknown>[],
	rootSchema: Schema
) {
	for (let i = 0; i < options.length; i++) {
		const option = options[i];

		// If the schema describes an object then we need to add slightly more
		// strict matching to the schema, because unless the schema uses the
		// "requires" keyword, an object will match the schema as long as it
		// doesn't have matching keys with a conflicting type. To do this we use an
		// "anyOf" with an array of requires. This augmentation expresses that the
		// schema should match if any of the keys in the schema are present on the
		// object and pass validation.
		if (option.properties) {
			// Create an "anyOf" schema that requires at least one of the keys in the
			// "properties" object
			const requiresAnyOf = {
				anyOf: Object.keys(option.properties).map((key) => ({
					required: [key],
				})),
			};

			let augmentedSchema;

			// If the "anyOf" keyword already exists, wrap the augmentation in an "allOf"
			if (option.anyOf) {
				// Create a shallow clone of the option
				const { ...shallowClone } = option;

				if (!shallowClone.allOf) {
					shallowClone.allOf = [];
				} else {
					// If "allOf" already exists, shallow clone the array
					shallowClone.allOf = shallowClone.allOf.slice();
				}

				shallowClone.allOf.push(requiresAnyOf);

				augmentedSchema = shallowClone;
			} else {
				augmentedSchema = { ...option, ...requiresAnyOf };
			}

			// Remove the "required" field as it's likely that not all fields have
			// been filled in yet, which will mean that the schema is not valid
			delete augmentedSchema.required;

			if (isValid(augmentedSchema, formData, rootSchema)) {
				return i;
			}
		} else if (isValid(option, formData, rootSchema)) {
			return i;
		}
	}
	return 0;
}

// Check to see if a schema specifies that a value must be true
export function schemaRequiresTrueValue(schema: Schema) {
	// Check if const is a truthy value
	if (schema.const) {
		return true;
	}

	// Check if an enum has a single value of true
	if (schema.enum && schema.enum.length === 1 && schema.enum[0] === true) {
		return true;
	}

	// If anyOf has a single value, evaluate the subschema
	if (schema.anyOf && schema.anyOf.length === 1) {
		return schemaRequiresTrueValue(schema.anyOf[0]);
	}

	// If oneOf has a single value, evaluate the subschema
	if (schema.oneOf && schema.oneOf.length === 1) {
		return schemaRequiresTrueValue(schema.oneOf[0]);
	}

	// Evaluate each subschema in allOf, to see if one of them requires a true
	// value
	if (schema.allOf) {
		return schema.allOf.some(schemaRequiresTrueValue);
	}

	return false;
}
