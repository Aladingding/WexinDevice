// 公共配置，开发环境和生成环境都能共用抽离的部分

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './WexinHardware/src/index.js',
        commons: ['react','react-dom','react-router']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './WexinHardware/build')
    },
    module: {
        rules:[
            // js-module
            {
                test: /(\.jsx|\.es6|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015","react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            // style-module
            {
                test: /(\.css|\.less|\.sass)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                ],
                exclude: /node_modules/
            },
            // {
            //     test: /(\.less)$/,
            //     use: ExtractTextPlugin.extract({
            //         // fallbackLoader: 'style-loader',
            //
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     minimize: true
            //                 }
            //             },
            //             'postcss-loader',
            //             'less-loader'
            //         ],
            //         loader: loaders,
            //     })
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['WexinHardware/build']), // 每次编译清除重复文件
        new HtmlWebpackPlugin({ // 模板文件
            template: path.resolve(__dirname, "./WexinHardware/src/index.ejs"),
            fillName: '../index.html',
            title: 'Production',
        }),
        // new ExtractTextPlugin({
        //     filename: "bundle.[chunkhash].css"
        // }),
    ],
    resolve: {  // 省略文件扩展名
        extensions: ['.js', '.jsx', '.es6', '.json', '.css', '.less', '.scss', '.html', '.md', '.markdown', 'coffee'],
        alias: {}
    },
};

// css-loader postcss-loader autoprefixer  extract-text-webpack-plugin
// babel-loader babel-core babel-plugin-react-transform  babel-preset-env babel-preset-es2015 babel-preset-react babel-preset-stage-0
// webpack-dev-server