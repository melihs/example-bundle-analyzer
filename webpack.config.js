const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
	// Other configuration settings...
	plugins: [
		// Other plugins...
		isProduction && new BundleAnalyzerPlugin(),
	].filter(Boolean),
};
