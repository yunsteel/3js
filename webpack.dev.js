const { merge } = require('webpack-merge');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    port: 3000,
    hot: true,
  },
});
