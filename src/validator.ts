import { FormContextType, RJSFSchema, StrictRJSFSchema, ValidatorType } from '@rjsf/utils';
import ZSchema from 'z-schema';

import log from '@wcpos/utils/src/logger';

/**
 *
 */
class Validator implements ValidatorType {
	validateFormData(formData, schema, customValidate, transformErrors, uiSchema) {
		// Perform AJV validation of formData against the schema
		const ajvValidation = this.isValid(schema, formData, schema);
		if (!ajvValidation) {
			// If AJV validation fails, get the raw errors from the AJV validation
			const { errors } = this.rawValidation(schema, formData);
			// If a custom validation function is provided, use it to add custom validation errors
			if (customValidate) {
				customValidate(
					formData,
					(errors) => {
						errors.forEach((error) => errors.push(error));
					},
					uiSchema
				);
			}
			// If a transform errors function is provided, use it to transform the errors
			if (transformErrors) {
				errors = transformErrors(errors, uiSchema);
			}
			// Return the final validation errors
			return { errors };
		}
		// If AJV validation and custom validation succeed, return an empty validation errors array
		return { errors: [] };
	}

	toErrorList(errorSchema, fieldPath = []) {
		let errors = [];
		if (!errorSchema) {
			return errors;
		}
		if (errorSchema.__errors) {
			errors = errorSchema.__errors.map((error) => {
				return {
					message: error,
					fieldPath: [...fieldPath],
				};
			});
		}
		Object.entries(errorSchema).forEach(([key, value]) => {
			if (key !== '__errors') {
				errors = errors.concat(this.toErrorList(value, [...fieldPath, key]));
			}
		});
		return errors;
	}

	isValid(schema, formData, rootSchema) {
		// Perform a stub validation that always returns true
		return true;
	}

	rawValidation(schema, formData) {
		// Return an empty errors array
		return { errors: [] };
	}
}

/**
 *
 */
export default function validator<
	T = any,
	S extends StrictRJSFSchema = RJSFSchema,
	F extends FormContextType = any
>(options = {}): ValidatorType<T, S, F> {
	return new Validator();
}

/**
 *
 */
// export function getValidator(schema: RxJsonSchema<any>) {
// 	const validatorInstance = new (ZSchema as any)({
// 		customValidator: (report, refSchema, json) => {
// 			if (refSchema.ref && report.hasError('INVALID_TYPE', ['string', 'object'])) {
// 				report.errors = report.errors.filter((error: any) => {
// 					return error.code !== 'INVALID_TYPE' || !error.path.includes(report.path[0]);
// 				});
// 			}
// 		},
// 	});

// 	const validator = (data: any) => {
// 		validatorInstance.validate(data, schema);
// 		return validatorInstance;
// 	};

// 	return (docData: any) => {
// 		if (schema.title === 'RxInternalDocument' || schema.title === 'RxLocalDocument') {
// 			return [];
// 		}
// 		const useValidator = validator(docData);
// 		if (useValidator === true) {
// 			return;
// 		}
// 		const errors: ZSchema.SchemaErrorDetail[] = (useValidator as any).getLastErrors();
// 		if (errors) {
// 			const formattedZSchemaErrors = (errors as any).map(
// 				({ title, description, message }: any) => ({
// 					title,
// 					description,
// 					message,
// 				})
// 			);
// 			log.error('z-schema validation failed', docData);
// 			log.error('z-schema validation errors', formattedZSchemaErrors);
// 			return formattedZSchemaErrors;
// 		} else {
// 			return [];
// 		}
// 	};
// }
