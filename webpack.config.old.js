const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "dist/js",
    filename: "bundle.js",
    publicPath: "js"
  },
  devServer: {
    inline: true,
    contentBase: "./dist",
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          exclude: /(node_modules)/,
          query: {
            presets: ["latest", "react"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'source-map'
};
