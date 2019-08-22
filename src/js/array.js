/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-15 14:44:33
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-22 17:09:06
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 数组原型方法
 */

// ********-- 数组flat --********
Array.prototype._selfFlat = function () {
    const ARRAY = [...this]
    const ARRAY_LENGTH = ARRAY.length
    const RESULT = []
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        if (Array.isArray(ARRAY[i])) {
            RESULT.push.apply(RESULT, ARRAY[i]._selfFlat())
        }
        else {
            RESULT.push(ARRAY[i])
        }
    }
    return RESULT
}

// ********-- 数组map --********
Array.prototype._selfMap = function (fn, context) {
    const ARGS = Array.prototype.slice.call(this)
    // const ARGS = [...this]
    const ARGS_LRNGTH = ARGS.length
    const NEW_MAP_LIST = []
    for (let i = 0; i < ARGS_LRNGTH; i++) {
        if (!ARGS.hasOwnProperty(i)) continue
        NEW_MAP_LIST.push(fn.call(context, ARGS[i], i, this))
    }
    return NEW_MAP_LIST
}

// ********-- filter --********
Array.prototype._selfFilter = function (fn, context) {
    // const ARGS = Array.prototype.slice.call(this)
    const ARGS = [...this]
    const ARGS_LENGTH = ARGS.length
    const RESULT_LIST = []
    for (let i = 0; i < ARGS_LENGTH; i++) {
        if (!ARGS.hasOwnProperty(i)) continue
        fn.call(context, ARGS[i], i, this) && RESULT_LIST.push(ARGS[i])
    }
    return RESULT_LIST
}

// ********-- 数组some --********
Array.prototype._selfSome = function (fn, context) {
    // const ARGS = Array.prototype.slice.call(this)
    const ARGS = [...this]
    const ARGS_LENGTH = ARGS.length
    if (!ARGS_LENGTH) return false
    for (let i = 0; i < ARGS_LENGTH; i++) {
        if (!ARGS.hasOwnProperty(i)) continue
        const RES = fn.call(context, ARGS[i], i, this)
        if (RES) return true
    }
    return false
}

// ********-- 数组every --********
Array.prototype._selfEvery = function (fn, context) {
    const ARGS = [...this]
    const ARGS_LENGTH = ARGS.length
    let count = 0
    if (!ARGS_LENGTH) return false
    for (let i = 0; i < ARGS_LENGTH; i++) {
        if (!ARGS.hasOwnProperty(i)) continue
        const RES = fn.call(context, ARGS[i], i, this)
        if (RES) count++
    }
    if (count === ARGS_LENGTH) return true
    return false
}

// ********-- 数组数字组成最小数 --********
Array.prototype._selfMinum = function () {

    const ARGS = [...this]
    const ARGS_LENGTH = ARGS.length
    if (!ARGS_LENGTH) return ''
    return ARGS.sort(compare).join('');
}
// ********-- 数字比较 --********
const compare = (a, b) => {
    const front = "" + a + b;
    const behind = "" + b + a;
    return front - behind;
}
