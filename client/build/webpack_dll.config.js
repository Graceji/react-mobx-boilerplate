const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  entry: {
    react: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dist'),
    library: '_dll_[name]',
    publicPath: '/',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, '../dist', '[name].manifest.json'),
    }),
  ],
};
