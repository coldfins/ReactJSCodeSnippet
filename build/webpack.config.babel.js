import _ from "lodash";
import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Dotenv from "dotenv-webpack";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import S3Plugin from "webpack-s3-plugin";
import project from "./project.config";

const inProject = path.resolve.bind(path, project.basePath);
const inProjectSrc = file => inProject(project.srcDir, file);
const inProjectPublic = file => inProject(project.publicDir, file);
const __DEV__ = process.env.NODE_ENV === "development";
const __TEST__ = process.env.NODE_ENV === "test";
const __STAGE__ = process.env.NODE_ENV === "staging";
const __PROD__ = process.env.NODE_ENV === "production";

const config = {
  devServer: {
    contentBase: path.resolve(project.basePath, project.outDir),
    headers: { "Access-Control-Allow-Origin": "*" },
    hot: true,
    noInfo: false,
    open: true,
    proxy: {
      "/api": {
        bypass: req => {
          if (req.headers.accept && req.headers.accept.includes("html"))
            return "/index.html";
          return false;
        },
        pathRewrite: { "^/api": "" },
        secure: false,
        target: ""
      }
    },
    // DO NOT USE publicPath
    quiet: false,
    stats: project.stats
  },
  devtool: project.sourcemaps ? "source-map" : false,
  entry: [
    "babel-polyfill",
    inProjectSrc(project.main),
    inProjectSrc("helpers/normalize")
  ],
  externals: project.externals,
  mode: __DEV__ ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  node: {
    fs: "empty"
  },
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          name: "vendors",
          priority: -20,
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  output: {
    chunkFilename: "[name].bundle.js",
    filename: __DEV__ ? "[name].js" : "[name].[chunkhash].js",
    path: inProject(project.outDir),
    publicPath: "/"
  },
  plugins: [
    new webpack.DefinePlugin(
      _.assign(
        {
          __DEV__,
          __PROD__,
          __TEST__,
          "process.env": { NODE_ENV: JSON.stringify(project.env) }
        },
        project.globals
      )
    ),
    new Dotenv({
      // Path to .env file (default)
      path: path.join(__dirname, "environment", `.env.${process.env.NODE_ENV}`)
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"],
    modules: [inProject(project.srcDir), "node_modules"]
  }
};

// JavaScript
// ------------------------------------
config.module.rules.push({
  exclude: /node_modules/,
  test: /\.(js|jsx)$/,
  use: [
    {
      loader: "babel-loader",
      query: {
        cacheDirectory: true,
        plugins: [
          "babel-plugin-transform-class-properties",
          "babel-plugin-syntax-dynamic-import",
          [
            "babel-plugin-transform-runtime",
            {
              helpers: true,
              regenerator: true
            }
          ],
          [
            "babel-plugin-transform-object-rest-spread",
            {
              useBuiltIns: true
            }
          ]
        ],
        presets: [
          "babel-preset-react",
          [
            "babel-preset-env",
            {
              modules: false,
              targets: {
                ie9: true,
                modules: false,
                uglify: true
              }
            }
          ]
        ]
      }
    }
  ]
});

// Styles
// ------------------------------------
const extractStyles = new MiniCssExtractPlugin({
  filename: "[name].[contenthash].css"
});
config.plugins.push(extractStyles);
config.module.rules.push({
  include: /flexboxgrid/,
  loader: ["style-loader", "css-loader", "sass-loader"],
  test: /\.scss$/
});

// Images
// ------------------------------------
config.module.rules.push({
  loader: "url-loader",
  options: {
    limit: 8192
  },
  test: /\.(png|jpg|gif)$/
});

// Fonts
// ------------------------------------
[
  ["woff", "application/font-woff"],
  ["woff2", "application/font-woff2"],
  ["otf", "font/opentype"],
  ["ttf", "application/octet-stream"],
  ["eot", "application/vnd.ms-fontobject"],
  ["svg", "image/svg+xml"]
].forEach(font => {
  const extension = font[0];
  const mimetype = font[1];

  config.module.rules.push({
    loader: "url-loader",
    options: {
      limit: 10000,
      mimetype,
      name: "fonts/[name].[ext]"
    },
    test: new RegExp(`\\.${extension}$`)
  });
});

// HTML Template
// ------------------------------------
config.plugins.push(
  new HtmlWebpackPlugin({
    favicon: inProjectPublic("favicon.ico"),
    inject: true,
    minify: {
      collapseWhitespace: true
    },
    template: inProjectPublic("index.html")
  })
);

// Development Tools
// ------------------------------------
if (__DEV__) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  );
}

// Production Optimizations
// ------------------------------------
if (__PROD__ || __STAGE__) {
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CompressionPlugin({
      test: /\.(js|css|map)$/
    }),
    new S3Plugin({
      cloudfrontInvalidateOptions: {
        DistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID,
        Items: ["/*"]
      },
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        region: "us-east-1",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      },
      s3UploadOptions: {
        Bucket: process.env.AWS_DEPLOY_BUCKET,
        ContentEncoding(fileName) {
          // eslint-disable-line
          if (/\.gz/.test(fileName)) {
            return "gzip";
          }
        }
      }
    })
  );

  config.optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      extractComments: true,
      parallel: 4
    })
  ];
}

module.exports = config;

export default config;
