const path = require('path');
const webpack = require('webpack');

module.exports = {
	core: {
    builder: 'webpack5',
	},
	
	stories: ['src/**/*.stories.tsx'],

	addons: [
		'@storybook/preset-create-react-app',
		'@storybook/addon-essentials',
		'@storybook/addon-actions',
		{
      name: '@storybook/addon-react-native-web',
      options: {
				modulesToTranspile: [
					'@wcpos/components',
					// 'react-native-reanimated',
					// 'react-native-gesture-handler'
				],
        // babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
	],

	framework: '@storybook/react',

	typescript: {
		// @TODO remove this https://github.com/styleguidist/react-docgen-typescript/issues/356
		// reactDocgen: 'none',
	},

	babel: async (options) => ({
    // Update your babel configuration here
    ...options,
		presets: ['@wcpos/babel-preset-expo']
  }),

	webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
	},
};
