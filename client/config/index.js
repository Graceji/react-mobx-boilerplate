'use strict'

const path = require('path');

module.exports = {
  dev: {
    // Paths
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,
    // Various Dev Server settings
    host: '0.0.0.0',
    port: 8080,

    /**
     * Source Maps
    */

    devtool: 'cheap-module-eval-source-map',

    cssSourceMap: true
  },
  build: {
    // Paths
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    assetsRoot: path.resolve(__dirname, '../dist'),
  }
};
