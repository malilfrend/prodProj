export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: {
    dev: string;
    prod: string;
  };
  html: string;
  src: string;
}

export interface EnvOptions {
  port: number;
  mode: BuildMode;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
