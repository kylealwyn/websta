const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
    './app/index',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
    }, {
      test: /\.png|\.svg$/,
      loaders: ['file-loader']
    }]
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: 'http://localhost:9000/dist/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

config.target = webpackTargetElectronRenderer(config);

if (process.env.NODE_ENV === 'production') {
  config.entry.shift();
  config.plugins.shift();
  config.output.publicPath = './dist/';
}

module.exports = config;
