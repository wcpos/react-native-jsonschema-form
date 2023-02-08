import * as React from 'react';

import {
	createSchemaUtils,
	StrictRJSFSchema,
	RJSFSchema,
	FormContextType,
	ValidatorType,
	IdSchema,
	UiSchema,
	SchemaUtilsType,
	RJSFValidationError,
	ErrorSchema,
} from '@rjsf/utils';
import cloneDeep from 'lodash/cloneDeep';
import forEach from 'lodash/forEach';
import set from 'lodash/set';

import { FormContext } from './context';
import { ErrorList } from './error-list';
import fields from './fields';
import { NodeTemplate } from './templates/node';
import validator from './validator';
import widgets from './widgets';

/** The data that is contained within the state for the `Form` */
export interface FormState<
	T = any,
	S extends StrictRJSFSchema = RJSFSchema,
	F extends FormContextType = any
> {
	/** The JSON schema object for the form */
	schema: S;
	/** The uiSchema for the form */
	uiSchema: UiSchema<T, S, F>;
	/** The `IdSchema` for the form, computed from the `schema`, the `rootFieldId`, the `formData` and the `idPrefix` and
	 * `idSeparator` props.
	 */
	idSchema: IdSchema<T>;
	/** The schemaUtils implementation used by the `Form`, created from the `validator` and the `schema` */
	schemaUtils: SchemaUtilsType<T, S, F>;
	/** The current data for the form, computed from the `formData` prop and the changes made by the user */
	formData: T;
	/** Flag indicating whether the form is in edit mode, true when `formData` is passed to the form, otherwise false */
	edit: boolean;
	/** The current list of errors for the form, includes `extraErrors` */
	errors: RJSFValidationError[];
	/** The current errors, in `ErrorSchema` format, for the form, includes `extraErrors` */
	errorSchema: ErrorSchema<T>;
	/** The current list of errors for the form directly from schema validation, does NOT include `extraErrors` */
	schemaValidationErrors: RJSFValidationError[];
	/** The current errors, in `ErrorSchema` format, for the form directly from schema validation, does NOT include
	 * `extraErrors`
	 */
	schemaValidationErrorSchema: ErrorSchema<T>;
}

/** The event data passed when changes have been made to the form, includes everything from the `FormState` except
 * the schema validation errors. An additional `status` is added when returned from `onSubmit`
 */
export interface IChangeEvent<
	T = any,
	S extends StrictRJSFSchema = RJSFSchema,
	F extends FormContextType = any
> extends Omit<FormState<T, S, F>, 'schemaValidationErrors' | 'schemaValidationErrorSchema'> {
	/** The status of the form when submitted */
	status?: 'submitted';
}

export interface FormProps<
	T = any,
	S extends StrictRJSFSchema = RJSFSchema,
	F extends FormContextType = any
> {
	/** The JSON schema object for the form */
	schema: S;
	/** An implementation of the `ValidatorType` interface that is needed for form validation to work */
	validator: ValidatorType<T, S, F>;
	/** The data for the form, used to prefill a form with existing data */
	formData?: T;
	/** The uiSchema for the form */
	uiSchema?: UiSchema;
	/** This prop allows passing in custom errors that are augmented with the existing JSON Schema errors on the form; it
	 * can be used to implement asynchronous validation
	 */
	extraErrors?: ErrorSchema<T>;
	// Form presentation and behavior modifiers
	/** You can provide a `formContext` object to the form, which is passed down to all fields and widgets. Useful for
	 * implementing context aware fields and widgets.
	 *
	 * NOTE: Setting `{readonlyAsDisabled: false}` on the formContext will make the antd theme treat readOnly fields as
	 * disabled.
	 */
	formContext?: F;
	/** To avoid collisions with existing ids in the DOM, it is possible to change the prefix used for ids;
	 * Default is `root`
	 */
	idPrefix?: string;
	/** To avoid using a path separator that is present in field names, it is possible to change the separator used for
	 * ids (Default is `_`)
	 */
	idSeparator?: string;
	// Callbacks
	/** If you plan on being notified every time the form data are updated, you can pass an `onChange` handler, which will
	 * receive the same args as `onSubmit` any time a value is updated in the form. Can also return the `id` of the field
	 * that caused the change
	 */
	onChange: (data: IChangeEvent<T, S, F>, id?: string) => void;
}

/**
 *
 */
export const Form = <T extends object | string>({
	schema,
	uiSchema = {},
	formData: rawFormData,
	extraErrors = {},
	onChange,
	idPrefix = 'root',
	idSeparator = '.',
	// validator,
	...props
}: FormProps<T>) => {
	const rootSchema = schema;
	const schemaUtils = createSchemaUtils(validator({ foo: 'bar' }), rootSchema);
	const formData = schemaUtils.getDefaultFormState(schema, rawFormData);
	const retrievedSchema = schemaUtils.retrieveSchema(rootSchema, formData); // don't know why this is needed
	const idSchema = schemaUtils.toIdSchema(
		retrievedSchema,
		uiSchema['ui:rootFieldId'],
		formData,
		idPrefix,
		idSeparator
	);

	/**
	 *
	 */
	const errors = React.useMemo(
		() => schemaUtils.getValidator().toErrorList(extraErrors),
		[extraErrors, schemaUtils]
	);

	/**
	 * @TODO - form should only emit changes, not the whole form data
	 */
	const handleOnChange = React.useCallback(
		(changes) => {
			let newData = cloneDeep(formData);
			forEach(changes, (value, id) => {
				const path = id.split('.');
				const root = path.shift();
				if (path.length === 0 && root === idPrefix) {
					// single-field form
					newData = value;
				} else {
					set(newData, path, value);
				}
			});
			if (onChange) {
				onChange(newData);
			}
		},
		[formData, onChange, idPrefix]
	);

	/**
	 *
	 */
	return (
		<FormContext.Provider
			value={{
				fields,
				widgets,
				schemaUtils,
				rootSchema,
				onChange: handleOnChange,
				context: props.formContext,
				/**
				 * Passing the `idPrefix` and `idSeparator` to the context allows fields to access the props
				 * @TODO - this should really be part of the SchemaUtils class helpers
				 */
				idPrefix,
				idSeparator,
			}}
		>
			{errors.length > 0 && <ErrorList errors={errors} />}
			<NodeTemplate
				schema={schema}
				formData={formData}
				name={idPrefix}
				idSchema={idSchema}
				uiSchema={uiSchema}
			/>
		</FormContext.Provider>
	);
};
