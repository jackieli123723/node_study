const config = require('../default.config'),
      htmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path');

module.exports = {
    createConfig: (fn)=>{
        config.entry = path.resolve(__dirname, `./${fn}/${fn}.js`);
        config.plugins.push(new htmlWebpackPlugin({
            filename: path.resolve(__dirname, `../${fn}.html`),
            template: path.resolve(__dirname, `./${fn}/${fn}.html`),
            inject: true
        }));
        return config;
    }
};