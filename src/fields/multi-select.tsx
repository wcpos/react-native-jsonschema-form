import * as React from 'react';

import { getUiOptions, optionsList } from '@rjsf/utils';

import { useFormContext } from '../context';
import { getWidget } from '../widgets';

export const MultiSelectField = ({ schema, formData, uiSchema, name, ...props }) => {
	const { widgets, schemaUtils } = useFormContext();
	const itemsSchema = schemaUtils.retrieveSchema(schema.items, formData);
	const enumOptions = optionsList(itemsSchema);
	const { widget = 'select', ...options } = {
		...getUiOptions(uiSchema),
		enumOptions,
	};
	const Widget = getWidget(schema, widget, widgets);

	return (
		<Widget
			multiple
			label={schema.title || name}
			schema={schema}
			value={formData}
			options={options}
			{...props}
		/>
	);
};
