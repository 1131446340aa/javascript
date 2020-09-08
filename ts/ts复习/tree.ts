
/**
@author 黄力豪
@desc 判读对称二叉树
@date 2020-06-30 14:03:31
@Email 1131446340@qq.com
*/


let Tree = {
    //定义一个数结构的数据,内部使用类型推断
    root: {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 4
            },
            right: {
                value: 6
            }
        },
        right: {
            value: 3,
            left: {
                value: 6,
                left: {
                    value: 5
                }
            },
            right: {
                value: 4
            }
        }
    }
}
interface TREE {
    //定义接口树
    //left,和right可选
    left?: TREE
    right?: TREE,
    value: number
}

function isduichenTree(tree: TREE): boolean {
    //返回boolean
    // 参数为接口树类型
    let state = true
    //声明返回结果
    function trees(leftNode: TREE, rightNode: TREE):boolean {
        if ((leftNode && rightNode && (leftNode.value === rightNode.value))) {
            //如果左右节点都存在,且左右节点的值相等
            //递归调用
            trees(leftNode.left, rightNode.right)
            trees(leftNode.right, rightNode.left)

        }
        else if (!leftNode && !rightNode) { 
            //如果左右节点都不存在
        }
        else {
            //表示出现两个节点不等
            state = false
            return state
        }
    }
    trees(tree.left, tree.right)
    return state
}
isduichenTree(Tree.root)
