"use strict";

const path = require("path");
const webpack = require("webpack");

const src = path.join(__dirname, "src");
const dist = path.join(__dirname, "dist");

const baseConfig = {
	context: __dirname,
	entry: {
		summernote: path.join(src, "summernote.js")
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
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: "babel",
				query: {
					presets: ["es2015", "react"]
				}
			}
		]
	}
};

const productionConfig = Object.assign({}, baseConfig, {
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: "babel",
				query: {
					presets: ["es2015", "react", "react-optimize"]
				}
			}
		]
	}
});

productionConfig.plugins = baseConfig.plugins.concat([
	new webpack.NoErrorsPlugin(),
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

module.exports = process.env.NODE_ENV !== "production" ? baseConfig : productionConfig;
