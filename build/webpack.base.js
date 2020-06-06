// 导入path模块
const path = require('path')

// 引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 引入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 引入webpack插件
const webpack = require('webpack');
module.exports = {
    // 入口
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    // 打包规则
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 2048
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.styl(us)?$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ // 往dist里塞html并且把bundle搞进去
            template: './index.html'
        }),
        new CleanWebpackPlugin(), // 执行时间，在打包之前执行,改变输出文件后，下一次打包可以清除老文件
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}