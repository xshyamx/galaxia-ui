var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./public/js/app.js",
  output: {
    path: path.resolve(__dirname, "public/js/dist"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    //    filename: "bundle.js",
    publicPath: "/"
  }
};
