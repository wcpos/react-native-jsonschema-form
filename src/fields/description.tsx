import * as React from 'react';
import Text from '@wcpos/components/src/text';
import Box from '@wcpos/components/src/box';

interface DescriptionFieldProps {
	description: string;
}

export const DescriptionField = ({ description }: DescriptionFieldProps) => {
	return (
		<Box>
			<Text>{description}</Text>
		</Box>
	);
};
