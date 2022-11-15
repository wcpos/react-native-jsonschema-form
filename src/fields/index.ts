import { ArrayField } from './array';
import { BooleanField } from './boolean';
import { DescriptionField } from './description';
import { MultiSchemaField } from './multi-schema';
import { NullField } from './null';
import { NumberField } from './number';
import { ObjectField } from './object';
import { StringField } from './string';
import { TitleField } from './title';
import { UnsupportedField } from './unsupported';

export default {
	AnyOfField: MultiSchemaField,
	ArrayField,
	BooleanField,
	DescriptionField,
	NumberField,
	ObjectField,
	OneOfField: MultiSchemaField,
	StringField,
	TitleField,
	NullField,
	UnsupportedField,
};
