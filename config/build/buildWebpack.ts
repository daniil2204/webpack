import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugin } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "../types/types";

export function BuildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === "development";

  return {
    mode: options.mode ?? "development",
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugin(options),
    devtool: isDev && "inline-source-map",
    devServer: isDev && buildDevServer(options),
  };
}
