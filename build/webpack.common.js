const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    build: path.join(__dirname, 'build'),
    public: path.join(__dirname, '../public'),
    src: path.join(__dirname, '../app'),
    dist: path.join(__dirname, '../dist'),
}

module.exports = {
    entry: {
        app: [
            path.join(PATHS.src, 'index'),
        ],
    },
    output: {
        filename: '[name]-[hash:8].js',
        path: PATHS.dist,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                // 将第三方模块提取出来
                vendors: {
                    test: /node_modules/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'initial',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader?cacheDirectory',
                    'react-hot-loader/webpack',
                ],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            importLoaders: 1,
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.less$/,
                include: /node_modules/,
                use: [
                    'style-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            // {
            //     test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
            //     exclude: /node_modules/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192,
            //             },
            //         },
            //     ],
            // },
            // {
            //     test: /\.(eot|woff|ttf|woff2|svg)$/,
            //     use: 'url-loader',
            // },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            Components: path.join(PATHS.src, 'components'),
            Containers: path.join(PATHS.src, 'containers'),
            '@': path.join(PATHS.src),
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '王思杰的个人网站',
            template: path.join(PATHS.build, '../template/index.html'),
            // favicon: path.join(PATHS.public, 'favicon.ico'),
            hash: true,
            // meta: {
            //     viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            // },
        }),
    ],
}
