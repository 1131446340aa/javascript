// class Questfast {
//     constructor(array) {
//         this.array = array

//     }

//     sort(start, end, array) {
//         let left = []
//         let right = []
//         let middle = Math.floor((start, end) / 2)

//         let m = array.splice(middle, 1)

//         array.forEach(item => {
//             if (item < m) left.push(item)
//         else right.push(item)
//         })
//         if (left.length > 1) { left = this.sort(0, left.length - 1, left) }
//         if (right.length > 1) { right = this.sort(middle + 1, right.length - 1, right) }
//         return [...left, ...m, ...right]

//     }

//     questsort() {
//        return this.sort(0, this.array.length - 1, this.array)
//     }
// }
// let qs = new Questfast([4, 3, 23, 4, 5, 34, 645, 7, 6, 756, 8, 67, 876, 9])
// console.log(qs.questsort());
//[
//     3,   4,  4,  5,  6,   7,
//     8,   9, 23, 34, 67, 645,
//   756, 876
// ]




// class Questfast {
//     constructor(arr) {
//         this.arr = arr
//     }
//     swip(left, right) {  
//         [this.arr[left], this.arr[right]] = [this.arr[right], this.arr[left]]

//     }
//     sort(start, end, array) {

//         let mindle = Math.floor((end + start) / 2)
//         if (array[start] > array[mindle]) {
//             this.swip(start, mindle)
//         }
//         if (array[mindle] > array[end]) {
//             this.swip(mindle, end)
//         }
//         if (array[start] > array[mindle]) {
//             this.swip(start, mindle)
//         }
//         this.swip(mindle, end - 1)
//         let i = start
//         let j = end-1
//         while (i<j) {

//             while (array[++i] < array[end-1]) { }
//             while (array[--j] > array[end-1]) { }
//             if (i < j) {
//                 this.swip(i, j)
//             } 
//         }
//         this.swip(i,end-1)

//         if (start < i - 1) { this.sort(start, i - 1, this.arr) }
//         if (i + 1 < end) {
//             this.sort(i + 1, end, this.arr)
//         }

//     }
//     questfast() {
//         this.sort(0, this.arr.length - 1, this.arr)
//         return this.arr
//     }
// }
// let qs = new Questfast(
//     [
//         4, 3, 23, 4, 5, 34, 645, 7, 6, 756, 8, 67, 876, 9,10
// ]
// )
// console.log(qs.questfast());
class FastSort {
    constructor(array) {
        this.array = array

    }
    sort(start, end, array) {
        let left = []
        let right = []
        let middle = Math.floor((start + end) / 2)
        let m = array.splice(middle, 1)
        array.forEach(item => {
            if (item < m[0]) {
                left.push(item)
            }
            else {
                right.push(item)
            }
        })
        if (left.length > 1) {
            left = this.sort(0, left.length - 1, left)
        }
        if (right.length > 1) {
            right = this.sort(0, right.length - 1, right)
        }
        return [...left, ...m, ...right]
    }
    fastsort() {
        return this.sort(0, this.array.length - 1, this.array)
    }

}
let arr = [4, 3, 23, 4, 5, 34, 645, 7, 6, 756, 8, 67, 876, 9, 10
]
let fs = new FastSort(arr)
console.log(fs.fastsort());


