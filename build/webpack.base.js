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
var ExtractTextPlugin = require('extract-text-webpack-plugin');//css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
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
            loader: 'vue-loader',
            options: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
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
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        // {
        //     test: /\.js$/,
        //     loader: 'eslint-loader',
        //     exclude: /node_modules/,
        //     options: {}
        // },
        {
            test: /.(woff|woff2|eot|ttf|otf|TTF)/,
            use: {
                loader: "url-loader",
                options: {
                    limit: 10240 //不超过10K时，将其转化为base64
                }
            }
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
            'vue': 'vue/dist/vue.js',
            'common': '~/package/style/common',
            'mixins': '~/package/style/mixins',
        },
        extensions: ['.js', '.json', '.css', '.vue']
    }
}