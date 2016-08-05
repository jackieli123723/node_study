const path = require('path'),
      webpack = require('webpack');
      
module.exports = {
  // 程式進入點
  entry: './src/main.js',
  // 定義webpack輸出的文件，我們在這裡設置了
  // 讓打包後生成的文件放在dist文件夾下的build.js文件中
  output: {
    path: path.resolve('./dist'),
    publicPath: '/dist',    
    filename: '[name].[hash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      //轉化ES6語法
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      //圖片轉化，小於8K自動轉化為base64的編碼
      {
        test: /\.(png|jpg|gif)$/,
        loader:'url-loader?limit=8192'
      },
      // 使用vue-loader 加載 .vue 結尾的文件
      {
        test: /\.vue$/, 
        loader: 'vue'   
      }
    ]
  },
  plugins : [],
  //這裡用於安裝babel，如果在根目錄下的.babelrc配置了，這裡就不寫了
  babel: {
     presets: ['es2015','stage-0'],
     plugins: ['transform-runtime']
  }
};
