var Tree = {
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
};
function isduichenTree(tree) {
    var state = true;
    function trees(leftNode, rightNode) {
        if ((leftNode && rightNode && (leftNode.value === rightNode.value))) {
            trees(leftNode.left, rightNode.right);
            trees(leftNode.right, rightNode.left);
        }
        else if (!leftNode && !rightNode) { }
        else {
            state = false;
            return state;
        }
    }
    trees(tree.left, tree.right);
    return state;
}
console.log(isduichenTree(Tree.root));
