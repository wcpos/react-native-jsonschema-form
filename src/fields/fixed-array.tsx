import * as React from 'react';

import { getUiOptions, allowAdditionalItems, isFixedItems } from '@rjsf/utils';
import cloneDeep from 'lodash/cloneDeep';

import { useFormContext } from '../context';
import { ArrayTemplate } from '../templates/array';
import { NodeTemplate } from '../templates/node';
import { generateKeyedFormData, generateRowId } from './array.helpers';

export const FixedArray = ({ schema, formData, uiSchema, idSchema, errorSchema, onChange }) => {
	const { rootSchema, schemaUtils, idPrefix, idSeparator } = useFormContext();

	const itemSchemas = React.useMemo(
		() => schema.items.map((item, index) => schemaUtils.retrieveSchema(schema, formData[index])),
		[formData, schema, schemaUtils]
	);

	const additionalSchema = allowAdditionalItems(schema)
		? schemaUtils.retrieveSchema(schema.additionalItems, formData)
		: null;

	/**
	 * @TODO - need to handle errorSchema
	 */
	const handleReorder = React.useCallback(
		(curr, next) => {
			const newArray = [...formData];
			newArray.splice(curr, 1);
			newArray.splice(next, 0, formData[curr]);
			onChange({ [idSchema.$id]: newArray });
		},
		[formData, idSchema.$id, onChange]
	);

	/**
	 * @TODO - need to handle errorSchema
	 */
	const handleRemoveIndex = React.useCallback(
		(idx) => {
			const newArray = [...formData];
			newArray.splice(idx, 1);
			onChange({ [idSchema.$id]: newArray });
		},
		[formData, idSchema.$id, onChange]
	);

	/**
	 * @TODO - do we really need to generate keys here?
	 * - if form is being controlled, we can just use the schema id?
	 */
	const items = React.useMemo(() => {
		let _formData = cloneDeep(formData) || [];
		if (_formData.length < itemSchemas.length) {
			// to make sure at least all fixed items are generated
			_formData = _formData.concat(new Array(itemSchemas.length - _formData.length));
		}

		const keyedFormData = generateKeyedFormData(formData);

		return keyedFormData.map((keyedItem, index) => {
			const { key, item } = keyedItem;
			const additional = index >= itemSchemas.length;
			const itemSchema = additional
				? schemaUtils.retrieveSchema(schema.additionalItems, item)
				: itemSchemas[index];
			const nodeIdSchema = schemaUtils.toIdSchema(
				schema.items,
				`${idSchema.$id}${idSeparator}${index}`,
				item,
				idPrefix,
				idSeparator
			);
			const nodeUiSchema = additional
				? uiSchema.additionalItems || {}
				: Array.isArray(uiSchema.items)
				? uiSchema.items[index]
				: uiSchema.items || {};
			const nodeErrorSchema = errorSchema ? errorSchema[index] : undefined;

			return {
				key,
				index,
				canMoveUp: index >= itemSchemas.length + 1,
				canMoveDown: additional && index < _formData.length - 1,
				canRemove: additional,
				onReorder: handleReorder,
				onRemoveIndex: handleRemoveIndex,
				children: (
					<NodeTemplate
						schema={schema.items}
						formData={item}
						idSchema={nodeIdSchema}
						uiSchema={nodeUiSchema}
						errorSchema={nodeErrorSchema}
					/>
				),
			};
		});
	}, [
		errorSchema,
		formData,
		handleRemoveIndex,
		handleReorder,
		idPrefix,
		idSchema.$id,
		idSeparator,
		itemSchemas,
		schema.additionalItems,
		schema.items,
		schemaUtils,
		uiSchema.additionalItems,
		uiSchema.items,
	]);

	/**
	 *
	 */
	const getNewFormDataRow = React.useCallback(() => {
		let itemSchema = schema.items;
		if (isFixedItems(schema) && allowAdditionalItems(schema)) {
			itemSchema = schema.additionalItems;
		}
		return schemaUtils.getDefaultFormState(itemSchema, undefined);
	}, [schema, schemaUtils]);

	/**
	 *
	 */
	const canAddItem = React.useMemo(() => {
		let { addable } = getUiOptions(uiSchema);
		if (addable !== false) {
			// if ui:options.addable was not explicitly set to false, we can add
			// another item if we have not exceeded maxItems yet
			if (schema.maxItems !== undefined) {
				addable = formData.length < schema.maxItems;
			} else {
				addable = true;
			}
		}
		return addable && additionalSchema;
	}, [additionalSchema, formData.length, schema.maxItems, uiSchema]);

	/**
	 *
	 */
	const handleOnAdd = React.useCallback(() => {
		const newRow = getNewFormDataRow();
		const newArray = Array.isArray(formData) ? [...formData, newRow] : [newRow];
		onChange({ [idSchema.$id]: newArray });
	}, [formData, getNewFormDataRow, idSchema.$id, onChange]);

	/**
	 *
	 */
	return (
		<ArrayTemplate
			schema={schema}
			uiSchema={uiSchema}
			items={items}
			canAdd={canAddItem}
			onAdd={handleOnAdd}
		/>
	);
};
