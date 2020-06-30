const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob-all");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
//const ImageminPlugin = require("imagemin-webpack-plugin").default;
//const imageminMozjpeg = require("imagemin-mozjpeg");
var path = require("path");
const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = function prod() {
  return merge.smart(common, {
    mode: "production",
    optimization: {
      minimizer: [
        new TerserJSPlugin({}),
        new OptimizeCSSAssetsPlugin({
          cssProcessorPluginOptions: {
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          },
        }),
      ],
    },
    module: {
      rules: [{
        test: /\.css$/i,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          "postcss-loader",
        ],
      }, ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),

      new PurgecssPlugin({
        paths: glob.sync(`${PATHS.src}/**/*`, {
          nodir: true,
        }),
        whitelist: ["hide", "show"],
        whitelistPatterns: [],
        whitelistPatternsChildren: [],
        keyframes: true,
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),

      new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        minRatio: 1,
      }),
      new CompressionPlugin({
        filename: "[path].br[query]",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          level: 11,
        },
        minRatio: 1,
      }),
      /*
          new ImageminPlugin({
            externalImages: {
              context: "src",
              sources: glob.sync("src/img/**"),
              destination: "docs",
              fileName: "[path][name].[ext]", // (filePath) => filePath.replace('jpg', 'webp') is also possible
            },
            plugins: [
              imageminMozjpeg({
                quality: 75,
                progressive: true,
              }),
            ],
          }),
      */
    ],
  });
}