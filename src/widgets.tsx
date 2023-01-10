import React from 'react';

import * as ReactIs from 'react-is';

import Checkbox from '@wcpos/components/src/checkbox';
import Combobox from '@wcpos/components/src/combobox';
import Radio from '@wcpos/components/src/radio';
import Select from '@wcpos/components/src/select';
import Slider from '@wcpos/components/src/slider';
import Switch from '@wcpos/components/src/switch';
import TextArea from '@wcpos/components/src/textarea';
import TextInput from '@wcpos/components/src/textinput';

import { getSchemaType } from './form.helpers';

export default {
	Checkbox,
	Radio,
	Select,
	Slider,
	Switch,
	TextArea,
	TextInput,
	Combobox,
};

/**
 *
 */
export const widgetMap = {
	boolean: {
		checkbox: 'Checkbox',
		radio: 'Radio',
		select: 'Select',
		switch: 'Switch',
		hidden: 'HiddenWidget',
	},
	string: {
		text: 'TextInput',
		password: 'PasswordWidget',
		email: 'EmailWidget',
		hostname: 'TextInput',
		ipv4: 'TextInput',
		ipv6: 'TextInput',
		uri: 'URLWidget',
		'data-url': 'FileWidget',
		radio: 'RadioGroup',
		select: 'Select',
		combobox: 'Combobox',
		textarea: 'TextArea',
		hidden: 'HiddenWidget',
		date: 'DateWidget',
		datetime: 'DateTimeWidget',
		'date-time': 'DateTimeWidget',
		'alt-date': 'AltDateWidget',
		'alt-datetime': 'AltDateTimeWidget',
		color: 'ColorWidget',
		file: 'FileWidget',
	},
	number: {
		text: 'TextInput',
		select: 'Select',
		updown: 'UpDownWidget',
		range: 'Slider',
		radio: 'Radio',
		hidden: 'HiddenWidget',
	},
	integer: {
		text: 'TextInput',
		select: 'Select',
		updown: 'UpDownWidget',
		range: 'Slider',
		radio: 'Radio',
		hidden: 'HiddenWidget',
	},
	array: {
		select: 'Select',
		checkboxes: 'CheckboxesWidget',
		files: 'FileWidget',
		hidden: 'HiddenWidget',
	},
};

/**
 *
 */
function mergeOptions(Component: Widget) {
	// cache return value as property of widget for proper react reconciliation
	if (!Component.MergedWidget) {
		const defaultOptions = (Component.defaultProps && Component.defaultProps.options) || {};
		Component.MergedWidget = ({ options = {}, ...props }) => (
			<Component options={{ ...defaultOptions, ...options }} {...props} />
		);
	}
	return Component.MergedWidget;
}

/**
 *
 */
export function getWidget(
	schema: Schema,
	widget: Widget | string,
	registeredWidgets?: { [name: string]: Widget } = {}
) {
	const type = getSchemaType(schema);

	if (
		typeof widget === 'function' ||
		ReactIs.isForwardRef(React.createElement(widget)) ||
		ReactIs.isMemo(widget)
	) {
		return mergeOptions(widget);
	}

	if (typeof widget !== 'string') {
		throw new Error(`Unsupported widget definition: ${typeof widget}`);
	}

	if (registeredWidgets.hasOwnProperty(widget)) {
		const registeredWidget = registeredWidgets[widget];
		return getWidget(schema, registeredWidget, registeredWidgets);
	}

	if (!widgetMap.hasOwnProperty(type)) {
		throw new Error(`No widget for type "${type}"`);
	}

	if (widgetMap[type].hasOwnProperty(widget)) {
		const registeredWidget = registeredWidgets[widgetMap[type][widget]];
		return getWidget(schema, registeredWidget, registeredWidgets);
	}

	throw new Error(`No widget "${widget}" for type "${type}"`);
}

/**
 *
 */
export function hasWidget(
	schema: Schema,
	widget: Widget | string,
	registeredWidgets?: { [name: string]: Widget } = {}
) {
	try {
		getWidget(schema, widget, registeredWidgets);
		return true;
	} catch (e) {
		if (
			e.message &&
			(e.message.startsWith('No widget') || e.message.startsWith('Unsupported widget'))
		) {
			return false;
		}
		throw e;
	}
}
