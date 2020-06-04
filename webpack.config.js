// 导入path模块
const path = require('path')

// 引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    // mode: 'production',
    mode: 'development',
    // 入口
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 打包规则
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'file-loader'
            }
        ]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}