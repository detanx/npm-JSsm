/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-21 15:19:51
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-21 19:20:24
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 单向链表
 */
// ********-- 链表节点 --********
function Node(data) {
    this.data = data
    this.next = null
}

// ********-- 链表 --********
function List() {
    let length = 0
    let head = null
    this.append = (data) => { // 向链表末尾添加元素
        let node = new Node(data)
        let current
        if (head === null) {
            head = node
        }
        else {
            current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
        return true
    }
    this.insert = (position, data) => { // 向链表指定位置添加元素
        if (position >= 0 && position <= length) { //检查是否越界
            let node = new Node(data),
                current = head,
                previous,
                index = 0
            if (position === 0) { //在第一个位置添加
                node.next = current
                head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                //通过改变指针，将node链接在previous和current之间
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }
    this.removeData = (data) => { // 通过数据删除链表元素
        let previous,
            current,
            index = 0
        if (head === null) {
            return false
        }
        current = head
        while (index++ < length && current.data !== data) {
            previous = current
            current = current.next
        }
        if (index > length) {
            return false
        } else {
            if (head.data === data) {
                head = current.next
            } else {
                previous.next = current.next
            }
            length--
            return true
        }
    }
    this.removeIndex = (position) => { // 通过位置删除链表元素
        if (position >= -1 && position < length) {
            let previous,
                current = head,
                index = 0
            if (position === 0) {
                head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return true
        } else {
            return false
        }
    }
    this.unShift = (data) => {  //向链表首插入元素
        let node = new Node(data),
            current = head
        node.next = current
        head = node
        length++
        return true
    }
    this.shift = () => {  //删除链表首元素
        let current = head
        if (head === null) {
            return false
        }
        else {
            head = current.next
            length--
            return true
        }
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
            previous.next = null
            length --
            return true
        }
    }
    this.pop2 = () => { // 删除链表尾元素
        let current
        if (head === null) {
            return false
        }
        current = head
        while (current && current.next.next) {
            current = current.next
        }
        current.next = null
        length--
        return true
    }
    this.isEmpty = () => {
        return length === 0
    }
    this.length = () => {
        return length
    }
    this.searchData = (data) => { //查找元素
        let current,
            index = 0
        if (head === null) {
            return false
        }
        current = head
        while (index++ < length && current.data !== data) {
            current = current.next
        }
        if( index > length) return false
        return {
            index: --index,
            data: current.data
        }
    }
    this.toString = () => { //输出数据组成的字符串
        let resultStr = "",
            current,
            index = length
        if (head === null) {
            return ""
        }
        current = head
        while (index-- > 0) {
            resultStr += "," + current.data
            current = current.next
        }
        return resultStr.slice(1)
    }
    this.getList = () => {
        return head
    }
}
// ********-- 链表反转 --********
reverseList = (head) => {
    let currentNode = null;
    let headNode = head;
    while (head && head.next) {
        currentNode = head.next;
        head.next = currentNode.next;
        currentNode.next = headNode;
        headNode = currentNode;
    }
    return headNode;
};
// ********-- 链表合并 --********
Merge = (pHead1, pHead2) => {
    if (!pHead1) {
        return pHead2;
    }
    if (!pHead2) {
        return pHead1;
    }
    let head;
    if (pHead1.val < pHead2.val) {
        head = pHead1;
        head.next = Merge(pHead1.next, pHead2);
    } else {
        head = pHead2;
        head.next = Merge(pHead1, pHead2.next);
    }
    return head;
}
// ********-- 链表测试 --********
let singleList1 = new List()
console.log('append(1)', singleList1.append("1"))
console.log(singleList1.toString())
console.log('append(2)', singleList1.append("2"))
console.log(singleList1.toString())

// ********-- 链表测试 --********
let singleList = new List()
console.log('append(1)', singleList.append("1"))
console.log(singleList.toString())
console.log('append(2)', singleList.append("2"))
console.log(singleList.toString())
console.log('append(3)', singleList.append("3"))
console.log(singleList.toString())
console.log('unShift(0)', singleList.unShift(0))
console.log(singleList.toString())
console.log('insert(2,4)', singleList.insert(5, "4"))
console.log(singleList.toString())
console.log('shift', singleList.shift())
console.log(singleList.toString())
console.log('pop', singleList.pop())
console.log(singleList.toString())
console.log('append(5)', singleList.append("5"))
console.log(singleList.toString())
console.log('searchData("2")', singleList.searchData("2"))
console.log('removeIndex(0)', singleList.removeIndex(0))
console.log(singleList.toString())
console.log('removeData("1")', singleList.removeData("1"))
console.log(singleList.toString())
console.log('isEmpty', singleList.isEmpty())

// ********-- 链表合并测试 --********
console.log('Merge,', Merge(singleList1.getList(), singleList.getList()))
// ********-- 链表反序测试 --********
console.log('reverseList,', reverseList(singleList1.getList()))