var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var EXAMPLES_DIR = path.resolve(process.cwd(), 'examples');

function buildEntries() {
  return fs.readdirSync(EXAMPLES_DIR).reduce(function (entries, dir) {
    if (dir === 'build') return entries;
    var isDraft = dir.charAt(0) === '_';
    var isDirectory = fs.lstatSync(path.join(EXAMPLES_DIR, dir)).isDirectory();
    if (!isDraft && isDirectory) {
      entries[dir] = path.join(EXAMPLES_DIR, dir, 'app.js');
    }
    return entries;
  }, {});
}

module.exports = {
  entry: buildEntries(),
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.resolve(process.cwd(), 'examples/__build__'),
    publicPath: '/__build__/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.jpg/, use: 'url-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
    ]
  },
  optimization: {
    splitChunks: { chunks: 'all', name: 'shared' },
  }
};
