// shared config (dev and prod)
const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@/enum": resolve(__dirname, "../../src/enums/index"),
      "@/enums": resolve(__dirname, "../../src/enums"),
      "@/utils": resolve(__dirname, "../../src/utils"),
      "@/apis": resolve(__dirname, "../../src/api"),
      "@/api": resolve(__dirname, "../../src/api/index"),
      "@/pages": resolve(__dirname, "../../src/pages"),
      "@/components": resolve(__dirname, "../../src/components"),
      "@/component": resolve(__dirname, "../../src/components/index"),
      "@/hooks": resolve(__dirname, "../../src/hooks"),
      "@/hocs": resolve(__dirname, "../../src/hocs"),
      "@/routes": resolve(__dirname, "../../src/routes"),
      "@/redux-store": resolve(__dirname, "../../src/redux-store"),
      "@/contexts": resolve(__dirname, "../../src/contexts"),
      "@/model": resolve(__dirname, "../../src/models/index"),
      "@/models": resolve(__dirname, "../../src/models"),
    },
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "awesome-typescript-loader"],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [new CheckerPlugin()],
  externals: {},
  performance: {
    hints: false,
  },
};
