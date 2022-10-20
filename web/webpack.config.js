const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, '../');

const babelLoaderConfiguration1 = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'public/src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
  ],
  options: {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      {
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    ],
  },
};

const babelLoaderConfiguration2 = {
  test: /(@?react-(navigation|native)).*\.(ts|js)x?$/,
  include: /node_modules/,
  exclude: [/react-native-web/, /\.(native|ios|android)\.(ts|js)x?$/],
  loader: 'babel-loader',
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    },
  },
};

module.exports = {
  entry: [path.resolve(appDirectory, 'index.web.js')],

  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist'),
  },

  plugins: [
    new webpack.EnvironmentPlugin({JEST_WORKER_ID: null}),
    new webpack.DefinePlugin({process: {env: {}}}),
  ],

  module: {
    rules: [
      babelLoaderConfiguration1,
      babelLoaderConfiguration2,
      imageLoaderConfiguration,
    ],
  },

  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.js', '.js', '.jsx'],
  },
};
