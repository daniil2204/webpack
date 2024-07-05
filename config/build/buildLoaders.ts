import MiniCssExtractPlugin, { loader } from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
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

  const swcLoader = {
    test: /\.tsx?$/,
    exclude: /(node_modules)/,
    loader: "swc-loader",
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      "sass-loader",
    ],
  };
  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };
  const svgrLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  return [swcLoader, scssLoader, assetLoader, svgrLoader];
}
