// Production config

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
/*--------------------------------生产模式---------------------------------------*/
module.exports = merge(common,{

    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(), // 优化高使用率模块为短id，靠前,webpack2已经默认支持无需配置
        new webpack.NoEmitOnErrorsPlugin(), // 关闭错误调试 NoErrorsPlugin is deprecated
        new webpack.DefinePlugin({ // 指定React等库文件使用版本，生产or开发环境等
            'process.env': {
                NODE_ENV: JSON.stringify('production')  // 'development'用于开发环境
            }
        }),
        new LodashModuleReplacementPlugin({ // 优化lodash打包
            path: true,
            flattening: true
        }),
        new webpack.optimize.UglifyJsPlugin({  // tree shaking is recommend
            beautify: false, // 添加适当的空格和换行
            compress: { // 开启代码压缩，包括DCE等dead code export
                warnings: false,  // 当因为副作用等原因DCE失败时，会在命令行中给出警告
                drop_debugger: true, // 删掉debugger
                drop_console: true,  // 删掉console
            },
            output: { comments: false },  // 保留注释，方便寻找`unused harmony`标签
            mangle: {  // 禁用变量混淆，以方便分析，默认为true, mangle: false单配置写法
                except: ['$super', '$', 'exports', 'require']  // 除了这几个字段，其他都混淆
            }
        }),
        new ExtractTextPlugin({ // 抽离样式表
            filename: "bundle.css"
        }),
        new webpack.optimize.CommonsChunkPlugin('commons'), // 抽取重复引用的代码为公共模块
    ]
});

// stage-0: transform-do-expressions，transform-function-bind
// stage-1: transform-export-extensions
// stage-2: transform-object-rest-spread，transform-class-properties
// stage-3: syntax-trailing-function-commas，transform-async-to-generator，transform-exponentiation-operator

