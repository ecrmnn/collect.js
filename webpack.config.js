const path = require('path');
const webpack = require('webpack');

function generateWebpackConfig(uglify) {
  const config = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: uglify ? 'collect.min.js' : 'collect.js',
      library: 'collect',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      ],
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
    ],
  };

  if (uglify) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false,
        },
      })
    );
  }

  return config;
}

module.exports = [true, false].map(generateWebpackConfig);
