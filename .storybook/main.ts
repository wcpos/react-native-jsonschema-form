import path from 'path';
import webpack from 'webpack';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../src/*.stories.tsx'],

    addons: [
		'@storybook/preset-create-react-app',
		'@storybook/addon-essentials',
		'@storybook/addon-actions',
		{
      name: '@storybook/addon-react-native-web',
      options: {
				modulesToTranspile: [
					'@wcpos/components',
					'@wcpos/themes',
					'@wcpos/utils',
					'@wcpos/hooks',
					'react-native-reanimated',
					'react-native-gesture-handler'
				],
        babelPlugins: [
          'react-native-reanimated/plugin',  
          '@babel/plugin-proposal-export-namespace-from'
        ],
      },
    },
	],

  framework: {
      name: '@storybook/react-webpack5',
      options: {}
  },

  typescript: {
		// check: false,
	},

  babel: async (options) => ({
    // Update your babel configuration here
    ...options,
		presets: ['@wcpos/babel-preset-expo'],
  }),

  webpackFinal: async (config, { configType }) => {
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			// Mock expo-haptics
			'expo-haptics$': path.resolve(__dirname, 'utils/expo-haptics'),
		}

    return config;
	},

  docs: {
    autodocs: true
  }
};

export default config;
