import * as React from 'react';

import { optionsList, getUiOptions } from '@rjsf/utils';

import { useFormContext } from '../context';
import { hasWidget, getWidget } from '../widgets';

interface StringFieldProps {
	schema: import('../types').Schema;
	formData: any;
	name: string;
}

export const StringField = ({ schema, formData, name, idSchema, uiSchema }: StringFieldProps) => {
	const [value, setValue] = React.useState(formData);
	const { widgets, onChange, context, schemaUtils } = useFormContext();
	const enumOptions = schemaUtils.isSelect(schema) && optionsList(schema);
	let defaultWidget = enumOptions
		? enumOptions.length <= 2
			? 'radio'
			: enumOptions.length >= 15
			? 'combobox'
			: 'select'
		: 'text';

	/**
	 *
	 */
	if (schema.format && hasWidget(schema, schema.format, widgets)) {
		defaultWidget = schema.format;
	}

	const { widget = defaultWidget, placeholder = '', ...options } = getUiOptions(uiSchema);
	const Widget = getWidget(schema, widget, widgets);

	/**
	 * How best to handle changes?
	 * - would rather if the textinput didn't update the form data on every change
	 * - either use a ref to reach and get the value, or store temporary value in state here
	 */
	const handleOnBlur = React.useCallback(() => {
		if (onChange) {
			onChange({ [idSchema.$id]: value });
		}
	}, [idSchema, onChange, value]);

	/**
	 * TODO: I need to make this less fragile
	 */
	const handleOnChange = React.useCallback(
		(val: any) => {
			if (
				widget === 'select' ||
				widget === 'combobox' ||
				widget === 'radio' ||
				typeof widget !== 'string' // HACK: to fix for custom widgets, eg: select language
			) {
				setValue(val); // TODO  - value doesn't update on render
				// Note: make this consistent, onChange just emits the value
				onChange({ [idSchema.$id]: val });
			} else {
				setValue(val);
			}
		},
		[idSchema.$id, onChange, widget]
	);

	/**
	 *
	 */
	const label = React.useMemo(() => {
		const _label = schema.title || name;
		if (context && context.label && typeof context.label === 'function') {
			return context.label(idSchema.$id, _label);
		}
		return _label;
	}, [context, idSchema.$id, name, schema.title]);

	/**
	 *
	 */
	return (
		<Widget
			label={label}
			onBlur={handleOnBlur}
			value={value}
			onChangeText={defaultWidget === 'text' ? handleOnChange : undefined}
			onChange={defaultWidget !== 'text' ? handleOnChange : undefined}
			options={enumOptions}
			placeholder={placeholder}
			withinPortal
			{...options}
		/>
	);
};
