/* function ListNode(x){
 this.val = x;
 this.next = null;
 }*/

 /**
 @author 黄力豪
 @desc 重点抓住这两个链表都是单挑递增的，因此我们只需要不断地比较他们的头结点就行，明显这是个重复的过程。

可以用递归做，也可以不用递归做，不用递归做只需要用两个指针来一直指向两个链表的“头”结点就行了
 @date 2020-06-27 20:36:01
 @Email 1131446340@qq.com
 */
 function Merge(pHead1, pHead2) {
    let pMergeHead = null;
    // write code here
    if (pHead1 === null) return pHead2;
    if (pHead2 === null) return pHead1;
    if (pHead1.val < pHead2.val) {
      pMergeHead = pHead1;
      pMergeHead.next = Merge(pHead1.next, pHead2);
    } else {
      pMergeHead = pHead2;
      pMergeHead.next = Merge(pHead1, pHead2.next);
    }
    return pMergeHead;
  }