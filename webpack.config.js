const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  target: "node",
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true",
    "./src/index.ts",
  ],
  output: {
    filename: "index__bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index__bundle.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
