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
      "@/services": resolve(__dirname, "../../src/services"),
      "@/page": resolve(__dirname, "../../src/page"),
      "@/components": resolve(__dirname, "../../src/components"),
      "@/hooks": resolve(__dirname, "../../src/hooks"),
      "@/hocs": resolve(__dirname, "../../src/hocs"),
      "@/routes": resolve(__dirname, "../../src/routes"),
      "@/redux-store": resolve(__dirname, "../../src/redux-store"),
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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "react-helmet": "react-helmet",
  },
  performance: {
    hints: false,
  },
};
