const config = require('../default.config'),
      htmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path');
let fn = 'example05';
config.entry = path.resolve(__dirname, `./${fn}.js`);
config.plugins.push(new htmlWebpackPlugin({
    filename: path.resolve(__dirname, `../${fn}.html`),
    template: path.resolve(__dirname, `./${fn}.html`),
    inject: true
}));
module.exports = config;