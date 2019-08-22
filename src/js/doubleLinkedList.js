/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-21 15:26:55
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-21 17:12:02
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 双向链表
 */
function Node (data) {
    this.data = data
    this.previous = null
    this.next = null
}

function DoubleList () {
    let length = 0,
        head = null 
    this.append = (data) => {
        let current = head
        const NODE = new Node(data)
        if ( !current ) {
            head = NODE
        }else {
            while(current.next) {
                current = current.next
            }
            current.next = NODE
            NODE.previous = current
        }
        length ++
        return true
    }
    this.insert = (position, data) => {
        if( position >= 0 && position <= length ) {
            let current = head,
                previous,
                index = 0
            const NODE = new Node(data)
            if( position === 0) {
                head = NODE
                head.next = current
                current.previous = head
            }else {
                while(index < position ) {
                    previous = current
                    current = current.next
                    index ++
                }
                if( !current ) {
                    previous.next = NODE
                    NODE.previous = previous
                } else {
                    previous.next = NODE
                    NODE.previous = previous
                    NODE.next = current
                    current.previous = NODE
                }
            }
            length ++
            return true
        }else {
            return false
        }
    }
    this.unshift = (data) => {
        let current = head
        const NODE = new Node(data)
        if ( !head ) {
            head = NODE
        } else {
            head = NODE
            NODE.next = current
            current.previous = head
        }
        length ++
        return true
    }
    this.shift = () => {
        let current = head
        if( !head ) return false
        head = current.next
        length --
        return true
    }
    this.removeIndex = (position) => {
        if(position >= 0 && position <= length) {
            let current = head,
                previous,
                index = 0
            while(index++ < position && current.next) {
                previous = current
                current = current.next
            }
            if ( !current.previous ) {
                head = current.next
                head.previous = null
            } else if ( !current.next ) {
                previous.next = null
            } else {
                previous.next = current.next
                current.next.previous = previous
            }
            length --
            return true
        } else {
            return false
        }
    }
    this.remove = (data) => {
        let current = head,
            previous,
            index = 0
        if( !current ) return false
        while( index ++ < length && current.data !== data ) {
            previous = current
            current = current.next
        }
        if (index > length) {
            return false
        }
        if( !current.previous ) {
            head = current.next
            head.previous = null
        } else if ( !current.next ) {
            previous.next = null
        } else {
            previous.next = current.next
            current.next.previous = previous
        }
        length --
        return true
    }
    this.pop = () => {
        let current = head,
            previous
        if( !current ) return false
        else {
            while(current && current.next) {
                previous = current
                current = current.next
            }
            previous.previous = null
            previous.next = null
            length --
            return true
        }
    }
    this.pop2 = () => {
        let current = head
        if( !current ) return false
        else {
            while(current && current.next.next) {
                current = current.next
            }
            current.next = null
            length --
            return true
        }
    }
    this.search = (data) => {
        let current = head,
            index = 0
        if( !current) return false
        while(index ++ < length && current.data !== data) {
            current = current.next
        }
        if(index > length) return false
        return {
            data,
            index: --index
        }
    }
    this.toString = () => {
        let current = head,
            index = 0,
            stringResult = ''
        if( !current ) return ''
        else {
            while(index ++ < length) {
                stringResult += ',' + current.data
                current = current.next
            }
            return stringResult.slice(1)
        }
    }
    this.isEmpty = () => {
        return length === 0
    }
}

const LIST = new DoubleList()
console.log('append',LIST.append('1'))
console.log('append',LIST.append('3'))
console.log('insert(0,"2")',LIST.insert(0,'2'))
console.log('append',LIST.append('4'))
console.log('pop',LIST.pop2())
console.log('append',LIST.append('5'))
console.log('remove',LIST.remove('6'))
console.log('shift',LIST.shift())
console.log('unshift',LIST.unshift('0'))
console.log('search',LIST.search('6'))
console.log('removeIndex',LIST.removeIndex(4))
console.log('append',LIST.append('6'))
console.log('string',LIST.toString())