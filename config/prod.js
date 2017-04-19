const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const context = __dirname + '/../src';

module.exports = function(env) {
  return {
    context,
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
              plugins: [
                [
                  "react-css-modules",
                  {
                    context: __dirname + '/../src', // `__dirname` is root of project and `src` is source
                    "generateScopedName": '[path]___[name]__[local]___[hash:base64]',
                    "filetypes": {
                      ".scss": "postcss-scss"
                    }
                  }
                ]
              ]
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
                  importLoaders: 2,
                  localIdentName: '[path]___[name]__[local]___[hash:base64]'
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => {
                    return [
                      require('autoprefixer')
                    ];
                  }
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
