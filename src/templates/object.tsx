import * as React from 'react';

import get from 'lodash/get';

import Box from '@wcpos/components/src/box';
import Collapsible from '@wcpos/components/src/collapsible';

import { useFormContext } from '../context';

interface ObjectTemplateProps {
	uiSchema: any;
	required?: boolean;
	properties: any[];
	schema: any;
}

export const ObjectTemplate = ({ uiSchema, required, properties, schema }: ObjectTemplateProps) => {
	const { fields } = useFormContext();
	const { TitleField, DescriptionField } = fields;
	const title = get(uiSchema, 'ui:title', schema.title);
	const description = get(uiSchema, 'ui:description', schema.description);

	const collapsible = get(uiSchema, 'ui:collapsible', false);
	if (collapsible) {
		return (
			<Box space="normal" paddingTop="small">
				<Collapsible title={<TitleField title={title} />} initExpand={collapsible === 'open'}>
					<Box space="normal" paddingBottom="normal">
						{description && <DescriptionField description={description} />}
						{properties.map(({ content }) => content)}
					</Box>
				</Collapsible>
			</Box>
		);
	}

	return (
		<Box space="normal" paddingBottom="normal">
			{title && <TitleField title={title} required={required} />}
			{description && <DescriptionField description={description} />}
			{properties.map(({ content }) => content)}
		</Box>
	);
};
