var path = require('path');
var BASE_DIR = process.cwd();
var COMPONENT_FILE = 'react-duotone';
var COMPONENT_NAME = 'ReactDuotone';

function getPackageMain() {
  return require(path.resolve(BASE_DIR, 'package.json')).main;
}

var isMinified = !!process.env.MINIFY;
if (isMinified) {
  COMPONENT_FILE += '.min';
}

module.exports = {
  entry: path.resolve(BASE_DIR, getPackageMain()),
  output: {
    filename: path.resolve(BASE_DIR, 'dist/' + COMPONENT_FILE + '.js'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  },
  optimization: {
    minimize: isMinified
  }
};
