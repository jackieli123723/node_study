const
    path = require('path'),
    webpack = require('webpack');

module.exports = {
  entry:  {
    "main"  : [ 
        "./src/TicketCode/FieldList.vue",
        "./src/TicketCode/FieldEditor.vue",
        "./src/TicketCode/FormIde.vue",
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vue-build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  }
}

