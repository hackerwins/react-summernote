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
    jquery: {
      root: '$',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery'
    }
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
    rules: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }]
      },
      {
        test: /\.(css)(\?.+)?$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 4096,
            name: '[name].[ext]'
          }
        }]
      }
    ]
  }
};
