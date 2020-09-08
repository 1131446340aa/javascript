var TreeTwo = /** @class */ (function () {
    function TreeTwo() {
        this.root = null;
        this.length = 0;
    }
    TreeTwo.prototype.add = function (value) {
        var newNode = new Nodes(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            newNode.parent = this.root;
            this.pushNode(newNode);
        }
        this.length++;
    };
    TreeTwo.prototype.pushNode = function (node) {
        if (node.value < node.parent.value) {
            if (node.parent.left) {
                node.parent = node.parent.left;
                this.pushNode(node);
            }
            else {
                node.parent.left = node;
            }
        }
        else {
            if (node.parent.right) {
                node.parent = node.parent.right;
                this.pushNode(node);
            }
            else {
                node.parent.right = node;
            }
        }
    };
    TreeTwo.prototype.postorderTraversal = function () {
        if (this.length == 0) {
            return -1;
        }
        else {
            this.postorderTraversalNode(this.root);
        }
    };
    TreeTwo.prototype.postorderTraversalNode = function (node) {
        if (node.left) {
            this.postorderTraversalNode(node.left);
        }
        console.log(node.value);
        if (node.right) {
            this.postorderTraversalNode(node.right);
        }
    };
    return TreeTwo;
}());
var Nodes = /** @class */ (function () {
    function Nodes(value, left, right, parent) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
    return Nodes;
}());
var Bst = new TreeTwo();
Bst.add(5);
Bst.add(6);
Bst.add(3);
Bst.add(2);
Bst.add(7);
Bst.postorderTraversal();
