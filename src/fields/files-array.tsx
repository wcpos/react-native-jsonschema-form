import * as React from 'react';

import { getUiOptions } from '@rjsf/utils';

import { useFormContext } from '../context';
import { getWidget } from '../widgets';

export const FilesArray = <T extends object>({
	schema,
	formData,
	name,
	uiSchema,
	...props
}: import('../../types').FieldProps<T>) => {
	const { widgets } = useFormContext();
	const { widget = 'files', ...options } = getUiOptions(uiSchema);
	const Widget = getWidget(schema, widget, widgets);

	const handleSelectChange = React.useCallback(
		(value) => {
			props.onChange(value);
		},
		[props]
	);

	return (
		<Widget
			multiple
			label={schema.title || name}
			schema={schema}
			value={formData}
			options={options}
			onChange={handleSelectChange}
		/>
	);
};
