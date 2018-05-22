'use strict'

const portfinder = require('portfinder');
const merge = require('webpack-merge');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: config.dev.devtool,
  devServer: {

  }
});

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      process.env.PORT = port;
    }
  });
});
