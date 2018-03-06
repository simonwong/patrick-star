const path = require('path')

const ROOT_PATH = path.resolve(__dirname)
const ENTRY_PATH = path.resolve(ROOT_PATH, 'app')
const OUTPUT_PATH = path.resolve(ROOT_PATH, 'build')
const DEVSERVER_path = path.resolve(ROOT_PATH, 'public')

module.exports = {
    entry: {
        index: [
            'babel-polyfill',
            path.resolve(ENTRY_PATH, 'index.js')
        ],
        vendor: [ 'react', 'react-dom' ]
    },
    output: {
        path: OUTPUT_PATH,
        publicPath: '/',
        // filename: '[name]-[hash:8].js',
        filename: '[name].js'
    },
    devServer: {
        contentBase: DEVSERVER_path,
        historyApiFallback: true,
        inline: true
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [ 'style-loader', 'css-loader', 'less-loader' ]
            },
            {
                test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                use: 'url-loader'
            }
        ]
    },
    mode: 'development'
}
