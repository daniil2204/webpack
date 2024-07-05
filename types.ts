import { BuildMode, Platform } from "./config/types/types";

export interface IEnvVariable {
  mode: BuildMode;
  port?: number;
  iNeedProgress: boolean;
  analyzer?: boolean;
  platform?: Platform;
}
