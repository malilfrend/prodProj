import * as webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {
    mode,
    isDev,
    paths: {
      entry,
      build,
      html,
    }
  } = options;

  return {
    mode: mode,
    entry: entry,
    output: {
      filename: '[name].[contenthash].js',
      path: isDev ? build.dev : build.prod,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(html),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}