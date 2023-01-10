import * as React from 'react';

import { isFixedItems, isCustomWidget } from '@rjsf/utils';

import { useFormContext } from '../context';
import { CustomWidget } from './custom-widget';
import { FilesArray } from './files-array';
import { FixedArray } from './fixed-array';
import { MultiSelectField } from './multi-select';
import { NormalArray } from './normal-array';

export const ArrayField = ({ schema, uiSchema, ...props }) => {
	const { fields, schemaUtils } = useFormContext();

	if (!Object.prototype.hasOwnProperty.call(schema, 'items')) {
		const { UnsupportedField } = fields;
		return <UnsupportedField schema={schema} reason="Missing items definition" />;
	}

	if (schemaUtils.isMultiSelect(schema)) {
		// If array has enum or uniqueItems set to true, call renderMultiSelect() to render the default multiselect widget or a custom widget, if specified.
		return <MultiSelectField {...props} schema={schema} uiSchema={uiSchema} />;
	}
	if (isCustomWidget(uiSchema)) {
		return <CustomWidget {...props} schema={schema} uiSchema={uiSchema} />;
	}
	if (isFixedItems(schema)) {
		return <FixedArray {...props} schema={schema} uiSchema={uiSchema} />;
	}
	if (schemaUtils.isFilesArray(schema, uiSchema)) {
		return <FilesArray {...props} schema={schema} uiSchema={uiSchema} />;
	}
	return <NormalArray {...props} schema={schema} uiSchema={uiSchema} />;
};
