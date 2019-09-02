<!--
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-06-17 08:02:36
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-09-02 17:43:38
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description:
 -->

# js-self-methods

js-methods 是一个 JavaScript 方法库"。
```
// 安装
npm install js-self-methods --save-dev
# OR
yarn add js-self-methods --save-dev
```
## 简介
* _method_.version // 获取当前版本号
*  _method_.debounce(fn,delay) //  防抖方法
*  _method_.throttle(fn,delay) //  节流方法
*  _method_.febonacci(n) //  斐波拉契数列
*  _method_.memory(fn) //  记忆函数
*  _method_.moneyFormat(number) //  金额千位分隔符
*  _method_._selfCurry(fn) //  柯里化
*  _method_.escape(string) //  敏感字符转义
*  _method_._selfFlat([1, 2, [7, 9, [3, 4, [5, 8]]]]) //  数组flat方法
*  _method_._selfDeweight([1, 2, 3,2, 3]) //  数组去重方法
*  _method_._selfMinum([21, 23, 3, 221]) //  数组数字组成最小数方法
## 发布到 npm

```
npm login
npm version <update_type>
npm run build // 先webpack打包类库，之后再发布
npm publish // 上传npm包
npm unpublish --force // 删除包(在发包的24小时内才允许撤销发布的包)
```
其中`npm version <update_type>`的选项有如下：
`npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]`

## 使用方式

```
npm install js-self-methods --save-dev
```

### 浏览器

1. 使用 script 标签

```
// 引入 js-self-methods文件下dist下的_method_.js
<script src="**/js-self-methods/dist/_method_.js"></script>
```

2. 使用方法

```
// 获取当前版本号
console.log('version',_method_.version)
// ********-- flat测试 --********
console.log('_selfFlat',  _method_._selfFlat([1, 2, [7, 9, [3, 4, [5, 8]]]]))
// ********-- 数组去重测试 --********
console.log('_selfDeweight', _method_._selfDeweight([1, 2, 3,2, 3]))
// ********-- 数组数字组成最小数方法 --********
console.log('_selfMinum',_method_._selfMinum([21, 23, 3, 221]))
......
```

### NODE

1.  Node.js
```
var _method_ = require('js-self-methods')
```

2. 使用方法

```
// 获取当前版本号
console.log('version',_method_.version)
// ********-- flat测试 --********
console.log('_selfFlat',  _method_._selfFlat([1, 2, [7, 9, [3, 4, [5, 8]]]]))
// ********-- 数组去重测试 --********
console.log('_selfDeweight', _method_._selfDeweight([1, 2, 3,2, 3]))
// ********-- 数组数字组成最小数方法 --********
console.log('_selfMinum',_method_._selfMinum([21, 23, 3, 221]))
......
```
