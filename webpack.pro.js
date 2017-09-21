// Production config

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common,{
    plugin:[
        new webpack.optimize.OccurenceOrderPlugin(), // 优化高使用率模块为短id，靠前
        new webpack.NoErrorsPlugin(), // 关闭错误调试
        new UglifyJSPlugin({
            beautify: true, // 添加适当的空格和换行
            compress: {     // 开启代码压缩，包括DCE等
                warnings: true,   // 当因为副作用等原因DCE失败时，会在命令行中给出警告
                drop_console: true,   // 不用解释了吧
            },
            output: { comments: true },  // 保留注释，方便寻找`unused harmony`标签
            mangle: false   // 禁用变量混淆，以方便分析
        }), // 压缩混淆
    ]
});

// stage-0: transform-do-expressions，transform-function-bind
// stage-1: transform-export-extensions
// stage-2: transform-object-rest-spread，transform-class-properties
// stage-3: syntax-trailing-function-commas，transform-async-to-generator，transform-exponentiation-operator

