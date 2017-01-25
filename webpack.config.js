const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const Paths = {
  Entry: `${__dirname}/app/index`,
  Output: `${__dirname}/build`,
  Build: `${__dirname}/build`,
  Public: 'http://localhost:3000/build/',
};

// CSS Stuff
const styleLoader = 'style-loader';
const cssGlobalLoader = 'style-loader!css-loader!sass-loader';
const cssModuleLoader = 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader';

const config = {
  devtool: 'cheap-module-source-map',
  entry: [Paths.Entry],
  output: {
    path: Paths.Output,
    publicPath: Paths.Public,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    // preLoaders: [
    //   { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['eslint-loader'] }
    // ],
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.global\.s?css$/,
        loader: isDevelopment ? cssGlobalLoader : ExtractTextPlugin.extract(styleLoader, cssGlobalLoader),
      }, {
        test: /^((?!\.global).)*\.s?css$/,
        loader: isDevelopment ? cssModuleLoader : ExtractTextPlugin.extract(styleLoader, cssModuleLoader),
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/, loader: 'url-loader' },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      __DEV__: isDevelopment,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  target: 'electron-renderer',
};

if (process.env.NODE_ENV === 'development') {
  config.entry.unshift(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
  );

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  );
}

if (process.env.NODE_ENV === 'production') {
  // Drops css and js files in top level of build folder
  config.output.publicPath = '';

  // Production only plugins
  config.plugins.push(
    new BabiliPlugin(),
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
  );
}

module.exports = config;
