/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-16 10:25:04
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-22 15:25:49
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 
 */
const merge = require("webpack-merge")
const baseConfig = require("./webpack.config.base")

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: 'cheap-source-map'
})