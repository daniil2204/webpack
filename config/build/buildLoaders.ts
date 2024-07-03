import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "../types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";
  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      "sass-loader",
    ],
  };
  return [tsLoader, scssLoader];
}
