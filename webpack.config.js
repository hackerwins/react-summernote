"use strict";

const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const src = path.join(__dirname, "src");
const dist = path.join(__dirname, "dist");
const isProduction = process.env.NODE_ENV === "production";
const extractCSS = new ExtractTextPlugin("[name].css");

const baseConfig = {
	context: __dirname,
	entry: {
		summernote: path.join(src, "Summernote.jsx")
	},
	output: {
		path: dist,
		filename: "[name].js",
		library: "ReactSummernote",
		libraryTarget: "umd"
	},
	externals: [{
		react: {
			root: "React",
			commonjs2: "react",
			commonjs: "react",
			amd: "react"
		},
		"react-dom": {
			root: "ReactDOM",
			commonjs2: "react-dom",
			commonjs: "react-dom",
			amd: "react-dom"
		},
		jquery: "jquery",
		"bootstrap/js/modal": "bootstrap/js/modal",
		"bootstrap/js/dropdown": "bootstrap/js/dropdown",
		"bootstrap/js/tooltip": "bootstrap/js/tooltip"
	}],
	plugins: [
		extractCSS
	],
	module: {
		loaders: [
			{
				test: /\.jsx$|\.js$/,
				exclude: /(node_modules)/,
				loader: "babel",
				query: {
					presets: ["es2015", "react"]
				}
			},
			{
				test: /\.(css)(\?.+)?$/,
				loader: extractCSS.extract("style", "css")
			},
			{
				test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
				loader: "url-loader?limit=4096&name=[name].[ext]"
			}
		]
	}
};

const productionConfig = Object.assign({}, baseConfig);
productionConfig.output.filename = "[name].min.js";
productionConfig.plugins = baseConfig.plugins.concat([
	new webpack.DefinePlugin({
		process: {
			env: {
				NODE_ENV: JSON.stringify("production")
			}
		}
	}),
	new webpack.optimize.UglifyJsPlugin({
		output: {
			comments: false
		},
		compress: {
			drop_console: true
		}
	})
]);

module.exports = !isProduction ? baseConfig : productionConfig;
