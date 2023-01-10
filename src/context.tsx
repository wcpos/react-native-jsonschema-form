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

/**
 *
 */
interface FormContextProps<
	T = any,
	S extends StrictRJSFSchema = RJSFSchema,
	F extends FormContextType = any
> {
	fields: any;
	widgets: any;
	rootSchema: S;
	onChange: any;
	context: F;
	schemaUtils: SchemaUtilsType<T, S, F>;
}

/**
 *
 */
export const FormContext = React.createContext<FormContextProps>({
	fields: {},
	widgets: {},
	rootSchema: {},
	onChange: () => {},
	context: null,
	schemaUtils: null,
});

/**
 *
 */
export const useFormContext = () => {
	const context = React.useContext(FormContext);
	if (!context) {
		throw new Error(`useFormContext must be called within FormContextProvider`);
	}
	return context;
};
