const baseConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const prodDev = {
    mode: 'production',
    // 插件
    plugins: []
}

module.exports = merge(baseConfig, prodDev);