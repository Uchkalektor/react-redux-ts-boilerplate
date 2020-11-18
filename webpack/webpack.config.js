const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'eval',
	entry: ['react-hot-loader/patch', path.join(__dirname, '../src/index.tsx')],
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].[hash].js',
		publicPath: '/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({ filename: path.join(__dirname, '../static/index.html'), inject: true }),
	],
	optimization: {
		moduleIds: 'named',
		concatenateModules: true,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		modules: ['node_modules', 'src'],
	},
	devServer: {
		hot: true,
		inline: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
				exclude: /node_modules/,
			},
		],
	},
}
