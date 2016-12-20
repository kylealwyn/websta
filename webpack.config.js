const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

const Paths = {
  Entry: './app/index',
  Output: `${__dirname}/build`,
  Public: 'http://localhost:9000/build/',
  Build: './build'
};

const cssFallbackLoader = 'style-loader';
const cssGlobalLoader = 'css-loader?sourceMap';
const cssModuleLoader = 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';

const isDevelopment = process.env.ENV === 'development';

const config = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
    Paths.Entry,
  ],
  output: {
    path: Paths.Output,
    publicPath: Paths.Public,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.global\.css$/,
      [isDevelopment ? 'loaders' : 'loader']: isDevelopment ? [cssFallbackLoader, cssGlobalLoader] : ExtractTextPlugin.extract(
        cssFallbackLoader,
        cssGlobalLoader.split('?')[0]
      )
    },
    {
      test: /^((?!\.global).)*\.css$/,
      [isDevelopment ? 'loaders' : 'loader']: isDevelopment ? [cssFallbackLoader, cssModuleLoader] : ExtractTextPlugin.extract(
        cssFallbackLoader,
        cssModuleLoader
      )
    },
    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    { test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/, loader: 'url-loader' }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: isDevelopment,
      'process.env.NODE_ENV': JSON.stringify(process.env.ENV)
    })
  ]
};

config.target = webpackTargetElectronRenderer(config);

if (process.env.ENV === 'development') {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}

if (process.env.ENV === 'production') {
  // Drops css and js files in top level of build folder
  config.output.publicPath = '';

  // Shave off webpack dev server entrypoint
  config.entry.shift();

  // Production only plugins
  config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new BabiliPlugin(),
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  );
}

module.exports = config;
