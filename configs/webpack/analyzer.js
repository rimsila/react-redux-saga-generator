const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: "build/index.html",
  plugins: [new BundleAnalyzerPlugin()],
  
};
