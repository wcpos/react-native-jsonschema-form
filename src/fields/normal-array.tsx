import * as React from 'react';

import { getUiOptions } from '@rjsf/utils';

import { generateKeyedFormData } from './array.helpers';
import { useFormContext } from '../context';
import { ArrayTemplate } from '../templates/array';
import { NodeTemplate } from '../templates/node';

/**
 *
 */
export const NormalArray = ({ schema, uiSchema, formData, name, idSchema }) => {
	const { onChange, schemaUtils, idPrefix, idSeparator } = useFormContext();

	/**
	 * TODO - need to handle errorSchema
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
	 * TODO - need to handle errorSchema
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
	 * TODO - do we really need to generate keys here?
	 * - if form is being controlled, we can just use the schema id?
	 */
	const items = React.useMemo(() => {
		const keyedFormData = generateKeyedFormData(formData);

		return keyedFormData.map((keyedItem, index) => {
			const { key, item } = keyedItem;
			const nodeIdSchema = schemaUtils.toIdSchema(
				schema.items,
				`${idSchema.$id}${idSeparator}${index}`,
				item,
				idPrefix,
				idSeparator
			);

			return {
				key,
				index,
				canMoveUp: index > 0,
				canMoveDown: index < formData.length - 1,
				canRemove: true,
				onReorder: handleReorder,
				onRemoveIndex: handleRemoveIndex,
				children: (
					<NodeTemplate
						schema={schema.items}
						formData={item}
						idSchema={nodeIdSchema}
						uiSchema={uiSchema.items}
					/>
				),
			};
		});
	}, [
		formData,
		handleRemoveIndex,
		handleReorder,
		idPrefix,
		idSchema.$id,
		idSeparator,
		schema.items,
		schemaUtils,
		uiSchema.items,
	]);

	/**
	 *
	 */
	const getNewFormDataRow = React.useCallback(() => {
		return schemaUtils.getDefaultFormState(schema.items, undefined, true);
	}, [schema.items, schemaUtils]);

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
		return addable;
	}, [formData, schema.maxItems, uiSchema]);

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
