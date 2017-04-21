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
          loader: 'babel-loader'
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
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true,
          drop_console: true
        },
        comments: false
      })
    ]
  }
};
