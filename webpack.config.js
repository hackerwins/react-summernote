const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
  context: __dirname,
  entry: {
    'react-summernote': path.join(src, 'Summernote.jsx')
  },
  output: {
    path: dist,
    filename: '[name].js',
    library: 'ReactSummernote',
    libraryTarget: 'umd'
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    jquery: 'jquery'
  }],
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CopyWebpackPlugin([{
      from: 'node_modules/summernote/dist/lang', to: '../lang'
    }]),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(css)(\?.+)?$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader?limit=4096&name=[name].[ext]'
      }
    ]
  }
};
