// development config
const merge = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");
const { join } = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "react-hot-loader/patch", // activate HMR for React
    "./index", // the entry point of our app
  ],

  devServer: {
    open: true,
    port: 3000,
    sockPort: 3000,
    hotOnly: true,
  },

  devtool: "cheap-module-eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      // hash: true,
      inject: true,
      template: "index.html",
      favicon: "assets/images/favicon.ico",
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new Dotenv({
      path: join(__dirname, ".env.staging"), // load this now instead of the ones in '.env'
    }),
  ],
});
