let arr = [1, 34, 3, 5, 534, 6, 45, 7, 457, 4, 23, 4, 3, 34, 23];

function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
}

function sort(arr, left, right) {
    let mindle = Math.floor((right - left) / 2)
    if (arr[0] > arr[mindle]) swap(arr, 0, mindle)
    if (arr[mindle] > arr[arr.length]) swap(arr, mindle, arr.length)
    if (arr[0] > arr[mindle]) swap(arr, 0, mindle)
    let i = 0;
    let j = arr.length - 1
    swap(mindle, j - 1)
    while (true) {
        while (arr[++i] < arr[mindle]) { }
        while (arr[--j] > arr[mindle]) { }
        if (i < j) {
            swap(arr, i, j)
        } else {
            break
        }
    }
    swap(arr, i, mindle)
    if (mindle > 1) { sort(arr.slice(0, mindle)) }
    if (arr.length - mindle > 1) { sort(arr.slice(mindle, arr.length)) }
    return arr

}


console.log(sort(arr, 0, arr.length - 1));
