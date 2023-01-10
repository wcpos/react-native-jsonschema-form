import React from 'react';

import {
	getSchemaType,
	FormContextType,
	RJSFSchema,
	Widget,
	RegistryWidgetsType,
	StrictRJSFSchema,
} from '@rjsf/utils';
import get from 'lodash/get';
import set from 'lodash/set';
import ReactIs from 'react-is';

import Checkbox from '@wcpos/components/src/checkbox';
import Combobox from '@wcpos/components/src/combobox';
import Radio from '@wcpos/components/src/radio';
import Select from '@wcpos/components/src/select';
import Slider from '@wcpos/components/src/slider';
import Switch from '@wcpos/components/src/switch';
import TextArea from '@wcpos/components/src/textarea';
import TextInput from '@wcpos/components/src/textinput';

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
 * The map of schema types to widget type to widget name
 */
const widgetMap: { [k: string]: { [j: string]: string } } = {
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

/** Wraps the given widget with stateless functional component that will merge any `defaultProps.options` with the
 * `options` that are provided in the props. It will add the wrapper component as a `MergedWidget` property onto the
 * `Widget` so that future attempts to wrap `AWidget` will return the already existing wrapper.
 *
 * @param AWidget - A widget that will be wrapped or one that is already wrapped
 * @returns - The wrapper widget
 */
function mergeWidgetOptions<
	T = any,
	S extends StrictRJSFSchema = RJSFSchema,
	F extends FormContextType = any
>(AWidget: Widget<T, S, F>) {
	let MergedWidget: Widget<T, S, F> | undefined = get(AWidget, 'MergedWidget');
	// cache return value as property of widget for proper react reconciliation
	if (!MergedWidget) {
		const defaultOptions = (AWidget.defaultProps && AWidget.defaultProps.options) || {};
		MergedWidget = ({ options, ...props }) => {
			return <AWidget options={{ ...defaultOptions, ...options }} {...props} />;
		};
		set(AWidget, 'MergedWidget', MergedWidget);
	}
	return MergedWidget;
}

/** Given a schema representing a field to render and either the name or actual `Widget` implementation, returns the
 * React component that is used to render the widget. If the `widget` is already a React component, then it is wrapped
 * with a `MergedWidget`. Otherwise an attempt is made to look up the widget inside of the `registeredWidgets` map based
 * on the schema type and `widget` name. If no widget component can be found an `Error` is thrown.
 *
 * @param schema - The schema for the field
 * @param [widget] - Either the name of the widget OR a `Widget` implementation to use
 * @param [registeredWidgets={}] - A registry of widget name to `Widget` implementation
 * @returns - The `Widget` component to use
 * @throws - An error if there is no `Widget` component that can be returned
 */
export function getWidget<
	T = any,
	S extends StrictRJSFSchema = RJSFSchema,
	F extends FormContextType = any
>(
	schema: RJSFSchema,
	widget?: Widget<T, S, F> | string,
	registeredWidgets: RegistryWidgetsType<T, S, F> = {}
): Widget<T, S, F> {
	const type = getSchemaType(schema);

	if (
		typeof widget === 'function' ||
		(widget && ReactIs.isForwardRef(React.createElement(widget))) ||
		ReactIs.isMemo(widget)
	) {
		return mergeWidgetOptions<T, S, F>(widget as Widget<T, S, F>);
	}

	if (typeof widget !== 'string') {
		throw new Error(`Unsupported widget definition: ${typeof widget}`);
	}

	if (widget in registeredWidgets) {
		const registeredWidget = registeredWidgets[widget];
		return getWidget<T, S, F>(schema, registeredWidget, registeredWidgets);
	}

	if (typeof type === 'string') {
		if (!(type in widgetMap)) {
			throw new Error(`No widget for type '${type}'`);
		}

		if (widget in widgetMap[type]) {
			const registeredWidget = registeredWidgets[widgetMap[type][widget]];
			return getWidget<T, S, F>(schema, registeredWidget, registeredWidgets);
		}
	}

	throw new Error(`No widget '${widget}' for type '${type}'`);
}

/** Detects whether the `widget` exists for the `schema` with the associated `registryWidgets` and returns true if it
 * does, or false if it doesn't.
 *
 * @param schema - The schema for the field
 * @param widget - Either the name of the widget OR a `Widget` implementation to use
 * @param [registeredWidgets={}] - A registry of widget name to `Widget` implementation
 * @returns - True if the widget exists, false otherwise
 */
export function hasWidget<
	T = any,
	S extends StrictRJSFSchema = RJSFSchema,
	F extends FormContextType = any
>(
	schema: RJSFSchema,
	widget: Widget<T, S, F> | string,
	registeredWidgets: RegistryWidgetsType<T, S, F> = {}
) {
	try {
		getWidget(schema, widget, registeredWidgets);
		return true;
	} catch (e) {
		const err: Error = e as Error;
		if (
			err.message &&
			(err.message.startsWith('No widget') || err.message.startsWith('Unsupported widget'))
		) {
			return false;
		}
		throw e;
	}
}
