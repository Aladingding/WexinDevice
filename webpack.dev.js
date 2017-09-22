
const webpack = require('webpack');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/*--------------------------------开发模式---------------------------------------*/
module.exports = merge(common, {
    devtool:'eval-source-map', // 生成一个完整干净的source-map，打包速度适中
    devServer:{
        //quiet:true, // 世界一下子安静了
        clientLogLevel: "none",
        contentBase:  "./WexinHardware/src",// 本地服务器所加载的页面所在的目录
        port: 8991,
        hot: true,  // 需要开启 plugins > new webpack.HotModuleReplacementPlugin()
        inline: true, // 实时刷新 设置为true，当源文件改变时会自动刷新页面
        historyApiFallback: true, //不跳转
        stats: { // 配置编译控制台打印输出
            errorDetails: true, // 显示错误细节
            colors: true,      // 打印变色
            modules: false,   // 显示引用模块
            reasons: false,  // 显示错误原因
            chunkModules: false, // 显示模块来源
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new BundleAnalyzerPlugin()
    ],
});