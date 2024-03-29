import * as React from 'react';

import { orderProperties } from '@rjsf/utils';
import get from 'lodash/get';

import { NodeTemplate } from '../templates/node';
import { ObjectTemplate } from '../templates/object';

interface ObjectFieldProps {
	schema: import('../types').Schema;
	formData: any;
	uiSchema: any;
	idSchema: any;
}

export const ObjectField = ({ schema, formData, uiSchema, idSchema }: ObjectFieldProps) => {
	/**
	 *
	 */
	const properties = React.useMemo(() => {
		const props = get(schema, 'properties', {});
		const orderedProperties = orderProperties(Object.keys(props), uiSchema['ui:order']);

		return orderedProperties.map((name) => {
			return {
				content: (
					<NodeTemplate
						key={name}
						name={name}
						schema={get(props, name, {})}
						formData={get(formData, name, undefined)}
						uiSchema={get(uiSchema, name, {})}
						idSchema={get(idSchema, name, {})}
					/>
				),
			};
		});
	}, [formData, idSchema, schema, uiSchema]);

	/**
	 *
	 */
	return <ObjectTemplate schema={schema} uiSchema={uiSchema} properties={properties} />;
};
