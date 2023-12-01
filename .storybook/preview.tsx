import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import getTheme from '@wcpos/themes';
import { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={getTheme({
				name: 'default',
				mode: 'light',
			})}>
				<Story />
			</ThemeProvider>
    ),
  ],
};

export default preview;
