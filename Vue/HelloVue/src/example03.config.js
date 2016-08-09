const config = require('../default.config'),
      htmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path');

config.entry = path.resolve(__dirname, './example03.js');
config.plugins.push(new htmlWebpackPlugin({
    filename: path.resolve(__dirname, '../example03.html'),
    template: path.resolve(__dirname, './example03.html'),
    inject: true
}));
module.exports = config;