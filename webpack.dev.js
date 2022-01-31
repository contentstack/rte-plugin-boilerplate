const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const pkg = require('./package.json');
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    watch: true,
    devServer: {
        static: path.join(__dirname, "dist"),
        https: true,
        port: 1268,
        compress: true,
        hot: false,
        host: 'localhost',
        allowedHosts: "all",
        open: {
            target: `/${pkg.output}`
        },
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    },
});
