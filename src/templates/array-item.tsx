import * as React from 'react';

import Box from '@wcpos/components/src/box';
import Button from '@wcpos/components/src/button';
import Icon from '@wcpos/components/src/icon';

export const ArrayItemTemplate = ({
	children,
	disabled,
	canMoveDown,
	canMoveUp,
	canRemove,
	index,
	onRemoveIndex = (idx: number) => {},
	onReorder = (curr: number, next: number) => {},
	readonly,
	padding = 'medium',
	border = true,
}) => {
	const hasToolbar = canMoveDown || canMoveUp || canRemove;

	/**
	 *
	 */
	const handleMoveUpPress = React.useCallback(() => {
		onReorder(index, index - 1);
	}, [index, onReorder]);

	/**
	 *
	 */
	const handleMoveDownPress = React.useCallback(() => {
		onReorder(index, index + 1);
	}, [index, onReorder]);

	/**
	 *
	 */
	const handleRemovePress = React.useCallback(() => {
		onRemoveIndex(index);
	}, [index, onRemoveIndex]);

	return (
		<Box horizontal space="medium" padding={padding} border={border}>
			<Box fill>{children}</Box>
			{hasToolbar && (
				<Box>
					<Button.Group size="small">
						{(canMoveUp || canMoveDown) && (
							<Button disabled={disabled || readonly || !canMoveUp} onPress={handleMoveUpPress}>
								<Icon size="xSmall" name="arrowUp" type="inverse" />
							</Button>
						)}

						{(canMoveUp || canMoveDown) && (
							<Button disabled={disabled || readonly || !canMoveDown} onPress={handleMoveDownPress}>
								<Icon size="xSmall" name="arrowDown" type="inverse" />
							</Button>
						)}

						{canRemove && (
							<Button type="critical" disabled={disabled || readonly} onPress={handleRemovePress}>
								<Icon size="xSmall" name="xmark" type="inverse" />
							</Button>
						)}
					</Button.Group>
				</Box>
			)}
		</Box>
	);
};
