const 
    path = require('path'),
    webpack = require('webpack');
var config = require('./webpack.config.js')

config.entry= {
    'form-ide' : './src/TicketCode/index.js'

    // "main"  : [ 
        // "./src/TicketCode/filters.js",
        // "./src/TicketCode/utils.js",
        // "./src/TicketCode/FieldList.vue",
        // "./src/TicketCode/FieldEditor.vue",
        // "./src/TicketCode/FormIde.vue"
    // ]
  };
config.output= {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vue-build.js',
    library: 'FormIdeLib',
    libraryTarget: 'umd'
  };
config.plugins = [
    // ...
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];


module.exports = config
