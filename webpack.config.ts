import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import {IEnvVariable} from "./types";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'


export default (env:IEnvVariable) => {
  const isDev = env.mode === 'development';
  console.log(typeof env.iNeedProgress)
  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.ts"),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      env.mode === 'development' && new webpack.ProgressPlugin()
    ].filter(Boolean),
    devtool: isDev && 'inline-source-map',
    devServer: isDev && {
      port: env.port ?? 5000,
      open: true
    }
  }
  return config;
};
