const path = require("path");

module.exports = {
    entry: path.resolve("App.js"),
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve("./"),
        publicPath: "/"
    },
    module: {
        rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve("node_modules"),
                loader: "babel-loader"
            }
        ]
    }
}