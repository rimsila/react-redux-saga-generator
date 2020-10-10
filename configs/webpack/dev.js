// development config
const merge = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");
const { join } = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "react-hot-loader/patch", // activate HMR for React
    "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.js", // the entry point of our app
  ],

  devServer: {
    open: true,
  },

  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new Dotenv({
      path: join(__dirname, "../../.env.dev") // load this now instead of the ones in '.env'
    })
  ],
});
