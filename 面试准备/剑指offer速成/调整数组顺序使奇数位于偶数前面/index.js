/**
@author 黄力豪
@desc 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
@date 2020-06-27 20:03:57
@Email 1131446340@qq.com
*/


function reOrderArray(array) {
    let res = []
    res1 = []

    array.forEach((item, index) => {
        item % 2 === 0 ? res1.push(item) : res.push(item)
    })
    return [...res,...res1]
}

reOrderArray([1, 23, 23, 4, 23, 423, 5, 23, 5, 346, 34, 6, 457, 5, 46, 54, , 745, 654564, 575675])