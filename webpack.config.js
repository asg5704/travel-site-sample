var path = require('path'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');



module.exports = {
  entry: {
    App: "./app/assets/scripts/app.js",
    Vendor: "./app/assets/scripts/Vendor.js",
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts/"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false,
          ecma: 5,
        }
      }
    })
  ]
}