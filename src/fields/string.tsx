import * as React from 'react';

import { optionsList, getUiOptions } from '@rjsf/utils';
import debounce from 'lodash/debounce';

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
	 * TODO: I need to make this less fragile
	 * - debounce is not needed for select, combobox, radio
	 * - debounce is not needed for custom widgets
	 * - debounce is needed for text, textarea
	 *
	 * - also need to keep value in sync with formData
	 */
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedOnChange = React.useCallback(
		debounce((val: any) => {
			onChange({ [idSchema.$id]: val });
		}, 500), // Adjust the debounce time (in ms) as needed
		[idSchema.$id, onChange]
	);
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
				debouncedOnChange(val);
			}
		},
		[debouncedOnChange, idSchema.$id, onChange, widget]
	);
	React.useEffect(() => {
		setValue(formData);
	}, [formData]);

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
			value={value}
			onChangeText={defaultWidget === 'text' ? handleOnChange : undefined}
			// HACK: fix for country select, defaultWidget is text, but uses combobox
			onChange={defaultWidget !== 'text' || typeof widget !== 'string' ? handleOnChange : undefined}
			options={enumOptions}
			placeholder={placeholder}
			withinPortal
			{...options}
		/>
	);
};
