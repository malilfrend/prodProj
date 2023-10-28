import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, EnvOptions } from './config/build/types/config';

export default (env: EnvOptions) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: {
      prod: path.resolve(__dirname, 'build'),
      dev: path.resolve(__dirname, 'buildDev'),
    },
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
  return config;
};
