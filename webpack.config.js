const path = require("path");
const dev = process.env.NODE_ENV == "development";
const liveSserver = require("live-server");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");

if (dev) {
	liveSserver.start({
		root: "./",
		file: "index.html",
		port: 8080,
	});
}

module.exports = {
	watch: dev,
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader", options: { modules: true } },
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "assets/[name].[ext]",
							publicPath: "dist",
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".js", ".ts"],
		plugins: [new TsconfigPathsPlugin()],
		// fallback: {
		// 	path: require.resolve("path-browserify"),
		// 	fs: false,
		// 	os: false,
		// 	path: false,
		// },
	},
	plugins: [new Dotenv()],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: path.resolve(__dirname, "dist"),
	},
};
