/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-15 14:44:33
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-09-02 17:38:48
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 数组方法
 */

const array = () => {
    // ********-- 数组flat --********
    const _selfFlat = function (arr) {
        if (!Array.isArray(arr)) {
            return arr
        }
        const ARRAY_LENGTH = arr.length
        const RESULT = []
        for (let i = 0; i < ARRAY_LENGTH; i++) {
            if (Array.isArray(arr[i])) {
                RESULT.push.apply(RESULT, _selfFlat(arr[i]))
            }
            else {
                RESULT.push(arr[i])
            }
        }
        return RESULT
    }

    // ********-- 数组数字组成最小数 --********
    const _selfMinum = function (arr) {
        if (!Array.isArray(arr)) {
            return arr
        }
        const ARGS_LENGTH = arr.length
        if (!ARGS_LENGTH) return ''
        return arr.sort(compare).join('');
    }
    // ********-- 数字比较 --********
    const compare = (a, b) => {
        const front = "" + a + b;
        const behind = "" + b + a;
        return front - behind;
    }

    // ********-- 数组去重 --********
    const _selfDeweight = (arr) => {
        return Array.from(new Set(arr))
    }
    return {
        _selfFlat,
        _selfMinum,
        _selfDeweight
    }
}
export default array()