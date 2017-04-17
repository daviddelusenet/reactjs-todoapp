var webpack = require('webpack');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './index.js'
  },
  output: {
    path: __dirname + '/dist/js', // `dist` is the destination
    filename: 'bundle.js',
    publicPath: 'js'
  },
  devServer: {
    inline: true,
    contentBase: __dirname + '/dist', // `__dirname` is root of the project
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['latest', 'react']
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};

module.exports = config;
