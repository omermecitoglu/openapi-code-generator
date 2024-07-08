const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: "raw-loader",
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "~": path.resolve(__dirname, "src/"),
    },
  },
  externals: [
    "handlebars",
  ],
  externalsType: "commonjs",
};
