const config = require('../default.config'),
      htmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path');

config.entry = path.resolve(__dirname, './example01.js');
config.plugins.push(new htmlWebpackPlugin({
    filename: path.resolve(__dirname, '../example01.html'),
    template: path.resolve(__dirname, './example01.html'),
    inject: true
}));
module.exports = config;