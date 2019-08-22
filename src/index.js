/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-06-17 08:02:36
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-22 17:10:33
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 
 */
import pgconf from '../package'
import extend from './js/extend'
import './js/array'
const _method_ = () => {
    return {
        ...extend,
        version: pgconf.version, // 版本号
    }

}

export default _method_()