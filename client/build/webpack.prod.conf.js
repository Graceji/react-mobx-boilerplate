'use strict'
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // webpack4 升级，用extract-text-webpack-plugin提取文件有问题
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('../config');

const env = require('../config/prod.env');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  optimization: {
    // minimize: true,
    // minimizer: [
    //   new UglifyJsPlugin({
    //     cache: true,
    //     parallel: true,
    //     uglifyOptions: {
    //       compress: true,
    //       ecma: 6,
    //       mangle: true
    //     },
    //     sourceMap: true
    //   })
    // ],
    // splitChunks: {
		// 	chunks: 'initial', // 只对入口文件处理
		// 	cacheGroups: {
		// 		vendor: { // split `node_modules`目录下被打包的代码到 `js/chunks/vendor.js
		// 			test: /\/node_modules\//,
		// 			name: 'vendor',
		// 			priority: 10,
		// 			enforce: true,
		// 			reuseExistingChunk: true   // 可设置是否重用该chunk（查看源码没有发现默认值）
		// 		},
		// 		commons: { // split `common`和`components`目录下被打包的代码到`js/chunks/commons.js `
		// 			test: /common\/|components\//,
		// 			name: 'commons',
		// 			priority: 10,
		// 			enforce: true,
		// 			reuseExistingChunk: true   // 可设置是否重用该chunk（查看源码没有发现默认值）
		// 		}
		// 	}
		// },
		runtimeChunk: {
			name: 'manifest'
		},
    // splitChunks: {
    //   cacheGroups: {
    //     commons: {
    //       chunks: 'initial',
    //       minChunks: 2,
    //       maxInitialRequests: 5, // The default limit is too small to showcase the effect
    //       minSize: 0 // This is example is too small to create commons chunks
    //     },
    //     vendor: {
    //       test: /node_modules/,
    //       chunks: 'initial',
    //       name: 'vendor',
    //       priority: 10,
    //       enforce: true
    //     }
    //   }
    // },
    splitChunks: {
      // chunks: 'initial',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        },
        manifest: {
          name: 'manifest',
          minChunks: Infinity
        },
      }
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        },
        output: {
          comments: false,
          beautify: false,
        },
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:12].css'),
      allChunks: true,
    }),
    // new ExtractTextPlugin({
    //   filename: utils.assetsPath('css/[name].[contenthash].css'),
    //   allChunks: true,
    // }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: ['react.dll.js'],
      publicPath: config.dev.assetsPublicPath,
      append: true
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin,
  ]
});

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin');

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
