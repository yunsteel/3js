const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
  mode: 'production',
  devtool: 'hidden-source-map',
});
