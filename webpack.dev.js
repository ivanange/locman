const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge.smart(common, {
  cache: true,
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./docs",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
});
