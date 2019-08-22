/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-06-17 08:02:36
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-22 15:04:06
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 
 */
let path = require('path')
let webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    target: 'node',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '_method_.js',
        library: '_method_', // 指定类库名,主要用于直接引用的方式(比如script)
        libraryExport: "default", // 对外暴露default属性，就可以直接调用default里的属性
        globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
        libraryTarget: 'umd' // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // 最终创建的文件名
            template: path.resolve(__dirname, '..', "src/index.html"), // 指定模板路径
            minify: {
                collapseWhitespace: true // 去除空白
            }
        }),
        // ProvidePlugin 可以将模块作为一个变量，被webpack在其他每个模块中引用。只有你需要使用此变量的时候，这个模块才会被 require 进来。
        new webpack.ProvidePlugin({
            _: ['lodash']
        })
    ],
    //有些库导入节点模块，但在浏览器中不使用它们。
    //告诉Webpack为它们提供空的模拟，以便导入它们。
    node: {
        fs: 'empty',
    },
    // 配置 Webpack 如何寻找模块所对应的文件
    resolve: {
        enforceExtension: false, // 配置为  true  所有导入语句都必须要带文件后缀
        extensions: [".js", ".json"],// 导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在
        alias: {
            "@": path.resolve(__dirname, "../src")
        }
    },
    externals: { // 从输出的bundle中排除依赖
        lodash: { // 可以在各模块系统(Commonjs/Commonjs2/AMD)中通过'lodash'访问，但在全局变量形式下用'_'访问
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_' // 指向全局变量
        }
    }
}