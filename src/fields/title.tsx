import * as React from 'react';

import Box from '@wcpos/components/src/box';
import Text from '@wcpos/components/src/text';

interface TitleFieldProps {
	title: string;
	required?: boolean;
}

export const TitleField = ({ title }: TitleFieldProps) => {
	return (
		<Box horizontal>
			<Text size="large">{title}</Text>
		</Box>
	);
};
