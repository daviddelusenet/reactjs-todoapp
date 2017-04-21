const webpack = require('webpack');
const { resolve } = require('path');
const context = resolve(__dirname, './../src');

module.exports = function(env) {
  return {
    context,
    entry: {
      app: [
        'react-hot-loader/patch',
        // activate HMR for React
        'webpack-dev-server/client?http://localhost:3000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        './index.js'
        // the entry point of our app
      ]
    },
    output: {
      path: resolve(__dirname, './../dist'), // `dist` is the destination
      filename: '[name].js',
      publicPath: '/js'
    },
    devServer: {
      hot: true, // enable HMR on the server
      inline: true,
      contentBase: resolve(__dirname, './../dist'), // `__dirname` is root of the project
      publicPath: '/js',
      port: 3000
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.js$/, // Check for all js files
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader',
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
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally
      new webpack.NamedModulesPlugin()
      // prints more readable module names in the browser console on HMR updates
    ]
  }
};
