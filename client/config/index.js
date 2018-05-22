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
  },
  build: {
    // Paths
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    assetsRoot: path.resolve(__dirname, '../dist'),
  }
}
