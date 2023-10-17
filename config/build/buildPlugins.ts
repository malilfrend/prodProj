import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildPaths } from "./types/config";

export function buildPlugins(templatePath: BuildPaths['html']): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: templatePath }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ]
}