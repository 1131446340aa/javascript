/**
@author 黄力豪
@desc 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。 
例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
@date 2020-06-26 19:56:36
@Email 1131446340@qq.com
*/
function minNumberInRotateArray1(rotateArray) {
    // write code here
    if (rotateArray.length === 0) return 0;
    while (rotateArray[0] < rotateArray[1]) {
        rotateArray.push(rotateArray.shift())
    }
    rotateArray.push(rotateArray.shift())
    return rotateArray[0]
}
console.log(minNumberInRotateArray1([3]))
// 注:们发现旋转数组在旋转后，有个分界点，而这个分界点就是最小的那个数。