let arr = [1, 34, 3, 5, 534, 6, 45, 7, 457, 4, 23, 4, 3, 34, 23];

function sort(arr) {
    let left = []
    let right = []
    let middle = Math.floor(arr.length / 2)
    let m = arr.splice(middle, 1)
    arr.forEach(element => {
        if (element < m[0]) {
            left.push(element)
        }
        else {
            right.push(element)
        }
    });
    if (left.length > 1) {
        left = sort(left)
    }
    if (right.length > 1) {
        right = sort(right)
    }
    return [...left, ...m, ...right]
}
console.log(sort(arr));

