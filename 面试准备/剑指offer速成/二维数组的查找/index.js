/**
@author 黄力豪
@desc 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
@date 2020-06-26 19:14:17
@Email 1131446340@qq.com
*/

function Find(target, array) {
    // write code here
    const n = array.length,
      m = array[0].length;
    let row = n - 1,
      col = 0;
    if (m === 0 && n === 0) {
      return false;
    }
    while (row >= 0 && col <= m - 1) {
      if (array[row][col] > target) {
        row--;
      } else if (array[row][col] < target) {
        col++;
      } else return true;
    }
    return false;
  }
   // 注:先找到最后一行第一列的值,先比较与target的大小,比target大则列加一,否则行减一,一直循环到找到为止.
  console.log(Find(3,[[2,3,4],[5,6,7]]))