/* eslint-disable no-undef */
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const helpers = require('./helpers')

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: helpers.root('dist/dev'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'umd'
  }
})
