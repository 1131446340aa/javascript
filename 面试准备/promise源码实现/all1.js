let p1 = Promise.resolve(1)
let p2 = new Promise(res => {
    setTimeout(() => {
        res(2)
    }, 3000)
})

Promise.all = function (arr) {
    if (!Array.isArray(arr)) {
        return false
    }
    return new Promise((resolve, reject) => {
        let arrayPromise = []
        let index = 0
        function processData(key, value) {
            arrayPromise[key] = value
            if (++index === arr.length) {
                resolve(arrayPromise)
            }
        }
        arr.forEach((item, i) => {
            (item && typeof item === 'object') || typeof item === 'function' ? typeof item.then === 'function' 
            ? item.then(res => {processData(i, res)}, reject): processData(i, item) : processData(i, item)
        })
    })
}

Promise.all([p1, p2, 3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})