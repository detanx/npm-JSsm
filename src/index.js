/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-06-17 08:02:36
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-09-02 17:36:32
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 
 */
import pgconf from '../package'
import extend from './js/extend'
import array from './js/array'
const _method_ = () => {
    return {
        ...array,
        ...extend,
        version: pgconf.version, // 版本号
    }

}

export default _method_()