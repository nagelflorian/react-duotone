const path = require('path');
const BASE_DIR = process.cwd();
let COMPONENT_FILE = 'react-duotone';
const COMPONENT_NAME = 'ReactDuotone';

function getPackageMain() {
  return require(path.resolve(BASE_DIR, 'package.json')).main;
}

const isMinified = !!process.env.MINIFY;
if (isMinified) { COMPONENT_FILE += '.min'; }

module.exports = {
  entry: path.resolve(BASE_DIR, 'lib/main.js'),
  output: {
    filename: COMPONENT_FILE + '.js',
    path: path.resolve(BASE_DIR, 'dist'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd',
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  optimization: {
    minimize: isMinified,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
