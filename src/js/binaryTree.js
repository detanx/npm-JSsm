/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-21 17:14:37
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-21 17:24:19
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 二叉树
 */
function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}
function Tree() {
    let root = null
    this.append = (data) => {
        const NODE = new Node(data)
        if (!root) {
            root = NODE
            return true
        }
        let current = root,
            parent
        while (current) {
            parent = current;
            if (data < parent.data) {
                current = current.left;
                if (!current) {
                    parent.left = NODE;
                }
            } else {
                current = current.right;
                if (!current) {
                    parent.right = NODE;
                }
            }
        }
        return true
    }
    this.getTree = () => {
        return root
    }
}

const TREE = new Tree()

console.log('append',TREE.append(2))
console.log('append',TREE.append(3))
console.log('append',TREE.append(1))
console.log('append',TREE.append(5))
console.log('append',TREE.append(4))
console.log('append',TREE.getTree())