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
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["latest", "react"]
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: "json-loader"
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      }
    ]
  },
  devtool: 'source-map',
  postcss: () => {
    return [
      require('autoprefixer')
    ];
  }
};
