class test {
    id: string
    constructor(){
        this.id='a'
    }
}
let a = new test()
console.log(a.id);

// function sort(arr: Array<number>): Array<number> {
//     if (arr.length === 1) {
//         return arr
//     }
//     else {
//         let m = Math.floor(arr.length / 2)
//         let left = arr.slice(0, m)
//         let right = arr.slice(m, arr.length)
//         return guibingsort(sort(left), sort(right))
//     }
// }
// function guibingsort(left: Array<number>, right: Array<number>): Array<number> {
//     let result: Array<number> = []
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             result.push(left.shift())
//         }
//         else {
//             result.push(right.shift())
//         }
//     }
//     if (left.length) {
//         result.push(...left)
//     }
//     if (right.length) {
//         result.push(...right)
//     }
//     return result
// }
// console.log(sort(arrnum));

// function quickSort(arr: Array<number>): Array<number> {

//     let left: Array<number> = []
//     let right: Array<number> = []
//     let middle = Math.floor(arr.length / 2)
//     let m = arr.splice(middle, 1)
// }






