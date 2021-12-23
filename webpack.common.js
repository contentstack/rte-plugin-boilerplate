const path = require("path");
const pkg = require("./package.json");

module.exports = {
    entry: path.resolve(__dirname, "src", pkg.entry + ".tsx"),
    externals: {
        react: "react",
    },
    mode: "production",
    output: {
        filename: pkg.output,
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "system",
    },
    module: {
        rules: [
            {
                rules: [
                    {
                        test: /\.css$/i,
                        use: ["style-loader", "css-loader"],
                    },
                ],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
};
