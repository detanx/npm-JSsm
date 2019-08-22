/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-06-17 08:02:36
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-22 17:14:14
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 
 */
var _method_ = require('../../dist/_method_')

console.log('version',_method_.version)
// ********-- every测试 --********
console.log('_selfEvery', [1, 2, 3]._selfEvery((item) => item > 0))
// ********-- 数组map测试 --********
console.log('_selfMap', [1, 2, 3]._selfMap((item) => item * 2))
// ********-- flat测试 --********
console.log('_selfFlat', [1, 2, [7, 9, [3, 4, [5, 8]]]]._selfFlat())
// ********-- filter测试 --********
console.log('_selfFilter', [1, 2, 3]._selfFilter((item) => item > 2))
// ********-- every测试 --********
console.log('_selfEvery', [1, 2, 3]._selfEvery((item) => item > 0))
// ********-- 数组数字组成最小数测试 --********
console.log('_selfMinum', [21, 23, 3, 221]._selfMinum())