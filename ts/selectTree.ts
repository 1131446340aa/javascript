
interface trees {
    left?: trees,
    right?: trees,
    value: number,
    parent?: trees
}

class TreeTwo {
    root = null
    length = 0

    add(value: number) {
        let newNode = new Nodes(value)
        if (!this.root) {
            this.root = newNode
        }
        else {
            newNode.parent = this.root
            this.pushNode(newNode)
        }
        this.length++
    }
    pushNode(node: trees) {
        if (node.value < node.parent.value) {
            if (node.parent.left) {
                node.parent = node.parent.left
                this.pushNode(node)
            }
            else {
                node.parent.left = node
            }
        }
        else {
            if (node.parent.right) {
                node.parent = node.parent.right
                this.pushNode(node)
            }
            else {
                node.parent.right = node
            }
        }
    }

    postorderTraversal() {
        if (this.length == 0) {
            return -1
        }
        else {
            this.postorderTraversalNode(this.root)
        }
    }
    postorderTraversalNode(node: trees) {
        if (node.left) {
            this.postorderTraversalNode(node.left)
        }
        console.log(node.value);
        if (node.right) {
            this.postorderTraversalNode(node.right)
        }      
    }
}


class Nodes {
    left:trees
    right:trees
    parent:trees
    constructor(public value: number) {
       
    }
}

let Bst = new TreeTwo()
Bst.add(5)
Bst.add(6)
Bst.add(3)
Bst.add(2)
Bst.add(7)

Bst.postorderTraversal()
