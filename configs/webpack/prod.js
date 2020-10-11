// production config
const merge = require("webpack-merge");
const { resolve, join } = require("path");
const Dotenv = require("dotenv-webpack");
const commonConfig = require("./common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    chunkFilename: "js/[id]-[chunkhash].js",
    path: resolve(__dirname, "../../build"),
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      // hash: true,
      inject: true,
      template: "index.html",
      favicon: 'assets/images/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(), // Merge chunks
    // extract imported css into own file
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new Dotenv({
      path: join(__dirname, "../../.env.prod"), // load this now instead of the ones in '.env'
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      // include all types of chunks
      chunks: "all",
      cacheGroups: {
        vendors: false,
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
});
