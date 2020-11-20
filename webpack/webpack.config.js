const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'eval',
	entry: ['react-hot-loader/patch', path.join(__dirname, '../src/index.tsx')],
	output: {
		path: path.join(__dirname, '../static'),
		filename: '[name].[hash].js',
		sourceMapFilename: '[file].map',
		publicPath: '/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({ template: path.join(__dirname, '../static/index.html'), inject: true }),
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
		publicPath: '/',
		port: 3000,
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
