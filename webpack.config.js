// 导入path模块
const path = require('path')
module.exports = {
    // 入口
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}