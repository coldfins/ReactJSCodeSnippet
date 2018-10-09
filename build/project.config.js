const TARGET_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  /** The full path to the project's root directory */
  basePath: __dirname,
  /** The environment to use when building the project */
  env: TARGET_ENV,
  /** A hash map of keys that the compiler should treat as external to the project */
  externals: {
    winston: 'from "winston"',
  },
  /** A hash map of variables and their values to expose globally */
  globals: {},
  /** The file name of the application's entry point */
  main: 'index',
  /** The name of the directory in which to emit compiled assets */
  outDir: '../dist',
  proxyUrl: process.env.PROXY_URL,
  /** The name of the directory containing the application public files */
  publicDir: '../public',
  /** The base path for all projects assets (relative to the website root) */
  publicPath: TARGET_ENV === 'development' ? 'http://localhost:8080/' : '/',
  /** Whether to generate sourcemaps */
  sourcemaps: TARGET_ENV === 'development',
  /** The name of the directory containing the application source code */
  srcDir: '../src',
  stats: 'errors-only',
  /** The list of modules to bundle separately from the core application code */
  vendors: [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'redux-thunk',
    'react-router',
  ],
  /** Whether to enable verbose logging */
  verbose: false,
};
