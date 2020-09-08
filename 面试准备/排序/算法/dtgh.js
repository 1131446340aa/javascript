let value = [3, 7, 12]

let weight = [1, 2, 3]

function dtgh(w, v, c) {
    let arr = []
    for (let i = 0; i < w.length; i++) {
        arr[i] = []
        for (let j = 0; j <= c; j++) {
            arr[i][j] = undefined
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === 0) {
                arr[i][j] = j < i + 1 ? 0 : v[i]
            }
            else {
                arr[i][j] = arr[i - 1][j]
                if (j >= w[i]) {
                    arr[i][j] = Math.max(arr[i][j], value[i] + arr[i - 1][j - w[i]])
                }
            }
        }
    }
    console.log(arr[v.length-1][c]);
}
dtgh(weight, value, 5)