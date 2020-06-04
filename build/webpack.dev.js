const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

// 引入webpack插件
const webpack = require('webpack');
const devConfig = {
    // mode: 'production',
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
    // 插件
    plugins: [
        new webpack.HotModuleReplacementPlugin() // 更新后不会刷新，保留后加的数据
    ]
}
module.exports = merge(baseConfig, devConfig);