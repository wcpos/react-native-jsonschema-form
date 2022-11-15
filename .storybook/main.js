const path = require('path');
const webpack = require('webpack');

module.exports = {
	core: {
    builder: 'webpack5',
	},
	
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
        babelPlugins: ['react-native-reanimated/plugin',  '@babel/plugin-proposal-export-namespace-from'],
      },
    },
	],

	// features: {
  //   babelModeV7: true,
  // },

	framework: '@storybook/react',

	typescript: {
		// check: false,
	},

	babel: async (options) => ({
    // Update your babel configuration here
    ...options,
		presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }], '@babel/preset-typescript'],
  }),

	webpackFinal: async (config, { configType }) => {
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			// Mock expo-haptics
			'expo-haptics$': path.resolve(__dirname, 'utils/expo-haptics'),
		}

    return config;
	},
};
