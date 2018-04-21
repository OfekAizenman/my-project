var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {

  entry: {
    app: ['./src/index.jsx', 'webpack/hot/only-dev-server'],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/dist/',
    filename: 'bundle.js'
  },

  module: {
    rules: [

      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?localIdentName=[name]__[local]--[hash:base64:5]!sass-loader')
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },
};