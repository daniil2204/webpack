import path from "path";
import webpack from "webpack";
import { IEnvVariable } from "./types";

import { BuildWebpack } from "./config/build/buildWebpack";
import { BuildPaths } from "./config/types/types";

export default (env: IEnvVariable) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };
  const config: webpack.Configuration = BuildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
  });
  return config;
};
