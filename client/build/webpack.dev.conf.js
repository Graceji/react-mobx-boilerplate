'use strict'

const portfinder = require('portfinder');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
// const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');
const utils = require('./utils');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: path.resolve(__dirname, '../dist'), // 要访问额外的静态资源就得配, 不然找不到文件
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.port
    }
  },
  plugins: [
    // 允许创建一个在编译时可以配置的全局常量
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './template.html',
      inject: true,
      isDev: true,
      title: '测试',
      vendor: '/react.dll.js',
    }),
    // new AddAssetHtmlPlugin([{
    //   filepath: path.resolve(__dirname, '../dist/react.dll.js'),
    // }]),
    // new HtmlWebpackIncludeAssetsPlugin({
    //   assets: ['react.dll.js'],
    //   publicPath: config.dev.assetsPublicPath,
    //   append: true
    // })
  ]
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port;
      // add port to devServer config
      devWebpackConfig.devServer.port = port;

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }));

      resolve(devWebpackConfig);
    }
  });
});
