'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"', // 环境变量的值需要时一个由双引号包裹的字符串 => JSON.stringify('development')
});
