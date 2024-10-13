const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: 'src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  // 모듈 해석 방식 결정
  resolve: {
    // alias: {
    //   '@src': path.resolve(__dirname, 'src/'),
    // },
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 해석 순서
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
};
