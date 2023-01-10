import * as React from 'react';

import Box from '@wcpos/components/src/box';
import Text from '@wcpos/components/src/text';

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
