const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// path.resolve是用来解析路径为规范的绝对路径
const pathConfig = {
    ENTRY_PATH: path.resolve(__dirname, "app/index.js"),
    OUTPUT_PATH: path.resolve(__dirname, "build"),
    DEVSERVER_PATH: path.resolve(__dirname, "public"),
    TEMPLATE_PATH: path.resolve(__dirname, "view/template/index.html"),
}

module.exports = {
    entry: {
        index: [
            // 配合入口index.js使用，react及其状态热更新
            "react-hot-loader/patch",
            // 
            "babel-polyfill",
            pathConfig.ENTRY_PATH
        ],
        vendor: [ "react", "react-dom", "react-router-dom" ]
    },
    output: {
        path: pathConfig.OUTPUT_PATH,
        publicPath: "/",
        filename: "[name]-[hash:8].js",
    },
    devServer: {
        contentBase: pathConfig.DEVSERVER_PATH,
        historyApiFallback: true,
        inline: true, // 热加载
        hot: true,  // 热更新
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                // 除了node_modules下的文件
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    // loader需要按顺序
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            // css模块加载
                            modules: true,
                            // class的命名，文件名+类名+哈希
                            localIdentName: "[name]-[local]-[hash:base64:5]",
                            // 
                            importLoaders: 1
                        }
                    },
                    "postcss-loader",
                ]
            },
            {
                test: /\.css$/,
                // 包含改目录下的文件
                include: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader"
                    },
                    "postcss-loader",
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]-[local]-[hash:base64:5]",
                            importLoaders: 1
                        }
                    },
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.less$/,
                use: [ "style-loader", "css-loader", "postcss-loader", "less-loader" ]
            },
            {
                test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                use: "url-loader"
            }
        ]
    },
    plugins: [
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
        // 根据模板文件，自动生成HTML
        new HtmlWebpackPlugin({
            title: "王思杰的个人网站",
            template: pathConfig.TEMPLATE_PATH,
        })
    ],
    resolve: {
        // 配置默认拓展名。在impor的时候就不用写后缀了
        extensions: [ ".js", ".jsx", ".less", ]
    },
    // webpack4 模式功能
    // 
    mode: "development"
}
