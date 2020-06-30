/* eslint-disable no-var, strict, prefer-arrow-callback */
"use strict";

var path = require("path");

module.exports = {
  entry: {
    index: "./src/index.ts",
  },
  module: {
    rules: [{
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
        }, ],
      },
      {
        test: /\.html$/i,
        use: [
          "file-loader?name=[name].[ext]",
          "extract-loader",
          {
            loader: "html-loader",
            options: {
              attributes: false,
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.pug$/i,
        use: [
          "file-loader?name=[name].[ext]",
          "extract-loader",
          {
            loader: "html-loader",
            options: {
              attributes: false,
              minimize: true,
            },
          },
          {
            loader: 'pug-html-loader',
            options: {
              data: {}
            }
          }
        ],
      }
    ],
  },
  plugins: [],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "docs"),
  },
};