const path = require('path');
const webpackConfig = require('@nextcloud/webpack-vue-config');

webpackConfig.entry = {
	main: path.join(__dirname, 'src', 'index.ts'),
};
webpackConfig.output.filename = '[name].js';
webpackConfig.output.chunkFilename = '[name].js';

module.exports = webpackConfig;
