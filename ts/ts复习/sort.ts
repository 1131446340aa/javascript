
let arr: number[] = [3, 45, 22, 4, 234, 234, 3546, 32, 1, 23432, 5235, 4, 644, 734, 233, 547, 34, 23, 5235, 2]
// function sort(arr: number[]) {
//     function swipper(left: number, right: number) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]
//     }
//     function questSort(left: number, right: number) {
//         let middle = parseInt((left + right) / 2 + "")
//         if (arr[left] > arr[middle]) {
//             swipper(left, middle)
//         }
//         if (arr[middle] > arr[right]) {
//             swipper(middle,right)
//         }
//         if (arr[left] > arr[middle]) {
//             swipper(left, middle)
//         }
//         swipper(middle, right - 1)
//         let i = left 
//         let j = right - 1
//         while (i < j) {
//             while (arr[++i] < arr[right - 1]) { }
//             while (arr[--j] > arr[right - 1]) { }
//             if (i < j) {
//                 swipper(i, j)
//             }

//         }
//         swipper(i, right - 1)
//         if (left < i - 1) {
//             questSort(left, i - 1)
//         }
//         if (right > i + 1) {
//             questSort(i + 1, right)
//         }

//     }
//     questSort(0, arr.length - 1)
//     return arr
// }
// console.log(sort(arr));

function sort(arr: number[]): number[] {
    function fastsort(start: number, end: number, array: number[]): number[] {
        let left: number[] = []
        let right: number[] = []
        let middle = Math.floor((start + end) / 2)
        let m: number[] = array.splice(middle, 1)
        array.forEach(item => {
            if (item < Number(m)) {
                left.push(item)
            } else {
                right.push(item)
            }
        })
        if (left.length > 1) {
            left = fastsort(0, left.length - 1, left)
        }
        if (right.length > 1) {
            right = fastsort(0, right.length - 1, right)
        }
        return [...left, ...m, ...right]

    }
    return fastsort(0, arr.length - 1, arr)
}

console.log(sort(arr));


