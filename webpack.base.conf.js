const path = require('path');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['happypack/loader?id=babel'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        venders: {
          test: /node_modules\/(?!(lodash)\/)/, // 去除 lodash，剩余的第三方库打成一个包，命名为 vendors-common
          name: 'vendors-common',
          chunks: 'all'
        },
        lodash: {
          test: /node_modules\/lodash\//, // lodash 库单独打包，并命名为 vender-lodash
          name: 'vender-lodash'
        },
        default: {
          minSize: 0,
          minChunks: 2,
          reuseExistingChunk: true,
          name: 'utils'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'optimizing-js',
      template: 'index.html'
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory']
    })
  ]
};
