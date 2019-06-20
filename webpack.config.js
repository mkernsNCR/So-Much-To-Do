const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	devServer: {
		contentBase: './public',
		historyApiFallback: true,
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:8080' })
	],
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src')
		},
		extensions: ['*', '.js', '.jsx']
	}
};
