/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-05 16:13:11
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-15 15:07:33
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 原型上的方法实现
 */

// ********-- call方法 --********
Function.prototype.myCall = function(context=window) {
    context.fn = this
    if(typeof context.fn !== 'function') {
        throw new TypeError('this is not function.')
    }
    const args = [...arguments].slice(1)
    const result = context.fn(...args)
    delete context.fn
    return result
}

// ********-- apply方法 --********
Function.prototype.myApply = function(context) {
    context.fn = this
    let result
    if( typeof context.fn !== 'function') {
        throw new TypeError('This is not function.')
    }
    if(arguments[1]) {
        if(Object.prototype.toString.call(arguments[1]) !== "[object Array]") {
            throw new TypeError('Second param is not array')
        }
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    return result
}

// ********-- call&apply 测试 --********
let foo = {
    value: 'name'
}
function bar(name, age) {
    return name + age + this.value
}

console.log('call',bar.myCall(foo, 'call',12))
console.log('apply',bar.myApply(foo,['apply',12]))

// ********-- instanceOf --********
Object.prototype.myInstanceOf = function(left,right) {
    const rightValue = right.prototype
    let leftValue = left.__proto__
    while(true) {
        if(leftValue === null) {
            return false
        }
        if(leftValue === rightValue ) {
            return true
        }
        leftValue = leftValue.__proto__
    }
}
// ********-- instanceOf测试 --********
function func (){}
const newfunc = new func()

console.log('instanceof',myInstanceOf(newfunc,func))
