import * as React from 'react';
import Text from '@wcpos/components/src/text';
import Box from '@wcpos/components/src/box';

const REQUIRED_FIELD_SYMBOL = '*';

interface TitleFieldProps {
	title: string;
	required?: boolean;
}

export const TitleField = ({ title, required }: TitleFieldProps) => {
	return (
		<Box horizontal>
			<Text size="large">{title}</Text> {required && <Text>{REQUIRED_FIELD_SYMBOL}</Text>}
		</Box>
	);
};
