const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(env) {
  return {
    context: __dirname + '/../src',
    entry: {
      app: './index.js'
    },
    output: {
      path: __dirname + '/../dist/js', // `dist` is the destination
      filename: '[name].js',
      publicPath: 'js'
    },
    devtool: 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.js$/, // Check for all js files
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['latest', 'react'],
              plugins: ['react-css-modules']
            }
          }]
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  modules: true,
                  importLoaders: 1,
                  localIdentName: '[path]___[name]__[local]___[hash:base64]'
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: '../css/style.min.css',
        allChunks: true
      })
    ]
  }
};
