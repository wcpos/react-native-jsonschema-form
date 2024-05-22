import * as React from 'react';

import { getUiOptions, optionsList } from '@rjsf/utils';

import { useFormContext } from '../context';
import { getWidget } from '../widgets';

interface BooleanFieldProps {
	schema: import('../types').Schema;
	formData: any;
	name: string;
}

export const BooleanField = ({ schema, formData, name, idSchema, uiSchema }: BooleanFieldProps) => {
	const { widgets, onChange, context } = useFormContext();
	const { widget = 'checkbox', ...options } = getUiOptions(uiSchema);
	const Widget = getWidget(schema, widget, widgets);

	let enumOptions;

	if (Array.isArray(schema.oneOf)) {
		enumOptions = optionsList({
			oneOf: schema.oneOf.map((option) => ({
				...option,
				title: option.title || (option.const === true ? 'Yes' : 'No'),
			})),
		});
	} else {
		enumOptions = optionsList({
			enum: schema.enum || [true, false],
			enumNames:
				schema.enumNames ||
				(schema.enum && schema.enum[0] === false ? ['No', 'Yes'] : ['Yes', 'No']),
		});
	}

	/**
	 *
	 */
	const handleOnChange = React.useCallback(
		(value: boolean) => {
			if (onChange) {
				onChange({ [idSchema.$id]: value });
			}
		},
		[idSchema.$id, onChange]
	);

	/**
	 *
	 */
	const label = React.useMemo(() => {
		const _label = schema.title || name;
		if (context && context.label && typeof context.label === 'function') {
			return context.label(idSchema.$id, _label);
		}
		return uiSchema['ui:label'] || _label;
	}, [context, idSchema.$id, name, schema.title, uiSchema]);

	/**
	 *
	 */
	return (
		<Widget
			label={label}
			value={formData}
			onChange={handleOnChange}
			options={{ ...options, enumOptions }}
		/>
	);
};
