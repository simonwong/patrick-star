const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Webpackbar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const PATHS = {
  build: __dirname,
  src: path.join(__dirname, '../src'),
  public: path.join(__dirname, '../public'),
  dist: path.join(__dirname, '../dist'),
}

module.exports = {
  entry: {
    // vendor: [
    //     '@babel/polyfill',
    // ],
    app: path.join(PATHS.src, 'index.tsx'),
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]-[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]-[hash:base64:5]',
              },
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|ttf|woff2|svg)$/,
        use: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.join(PATHS.src),
      // 'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new Webpackbar({
      name: '🚚 Personal Blog',
      color: '#3f51b5',
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.join(__dirname, '../tsconfig.json'),
      eslint: true,
    }), // 在单独的进程上运行TypeScript类型检查器
    new HtmlWebpackPlugin({
      title: '王思杰的个人网站',
      template: path.join(PATHS.build, './template/index.html'),
      // favicon: path.join(PATHS.public, 'favicon.ico'),
      hash: true,
      // meta: {
      //     viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      // },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}
