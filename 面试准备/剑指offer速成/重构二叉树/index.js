/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
 function reConstructBinaryTree(pre, vin) {
    // write code here
    if (pre.length === 0 || vin.length === 0) {
      return null;
    }
    // 前序第一个是根节点，也是中序左右子树的分割点
    const index = vin.indexOf(pre[0]),
      left = vin.slice(0, index),
      right = vin.slice(index + 1);
    return {
      val: pre[0],
      // 递归左右子树的前序、中序
      left: reConstructBinaryTree(pre.slice(1, index + 1), left),
      right: reConstructBinaryTree(pre.slice(index + 1), right)
    };
  }


//   注: 先通过前序序遍历的第一个节点找到根节点,然后区分左树与右树的中序,然后递归调用左树和右树,左树的前序遍历的长度为中序的长度
  console.log(reConstructBinaryTree([1,3,4,5,2],[4,3,5,1,2]))