import * as React from 'react';

import get from 'lodash/get';

import Box from '@wcpos/components/src/box';
import Button from '@wcpos/components/src/button';
import Collapsible from '@wcpos/components/src/collapsible';
import Icon from '@wcpos/components/src/icon';

import { useFormContext } from '../context';
import { ArrayItemTemplate } from './array-item';

export const ArrayTemplate = ({ uiSchema, schema, items, canAdd, onAdd, disabled, readonly }) => {
	const { fields } = useFormContext();
	const { TitleField, DescriptionField } = fields;
	const collapsible = get(uiSchema, 'ui:collapsible', false);
	const title = get(uiSchema, 'ui:title', schema.title);
	const description = get(uiSchema, 'ui:description', schema.description);

	const { orderable, removable } = {
		orderable: true,
		removable: true,
		...uiSchema['ui:options'],
	};

	/**
	 * Don't show template for empty array
	 */
	if (!canAdd && items.length === 0) {
		return null;
	}

	if (collapsible) {
		return (
			<Box space="small" paddingBottom="small">
				<Collapsible title={<TitleField title={title} />} initExpand={collapsible === 'open'}>
					{description && <DescriptionField description={description} />}
					<Box>
						{items &&
							items.map((arrayItemProps) => {
								return (
									<ArrayItemTemplate
										{...arrayItemProps}
										canMoveDown={orderable && arrayItemProps.canMoveDown}
										canMoveUp={orderable && arrayItemProps.canMoveUp}
										canRemove={removable && arrayItemProps.canRemove}
									/>
								);
							})}
					</Box>

					{canAdd && (
						<Box horizontal>
							<Button onPress={onAdd} disabled={disabled || readonly}>
								<Icon name="plus" />
							</Button>
						</Box>
					)}
				</Collapsible>
			</Box>
		);
	}

	return (
		<Box space="small" paddingBottom="small">
			<Box>
				{title && <TitleField title={title} />}
				{description && <DescriptionField description={description} />}
			</Box>
			<Box>
				{items &&
					items.map((arrayItemProps) => {
						return (
							<ArrayItemTemplate
								{...arrayItemProps}
								canMoveDown={orderable && arrayItemProps.canMoveDown}
								canMoveUp={orderable && arrayItemProps.canMoveUp}
								canRemove={removable && arrayItemProps.canRemove}
							/>
						);
					})}
			</Box>

			{canAdd && (
				<Box horizontal>
					<Button onPress={onAdd} disabled={disabled || readonly}>
						<Icon name="plus" />
					</Button>
				</Box>
			)}
		</Box>
	);
};
