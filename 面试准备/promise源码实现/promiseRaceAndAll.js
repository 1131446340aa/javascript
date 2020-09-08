

Promise.race = function (arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not Array`)
    }
    return new Promise((resolve, reject) => {
        arr.forEach(item => {
            (item && typeof item === 'object') || typeof item === 'function' ?
                typeof item.then === 'function' && item.then(resolve, reject) : resolve(item)
        })
    })
}
Promise.all = function (arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`${arr} is not Array`)
    }
    return new Promise((resolve, reject) => {
        let arrayPromise = [], index = 0
        function processData(key, value) {
            arrayPromise[key] = value
            ++index === arr.length && resolve(arrayPromise)
        }
        arr.forEach((item, i) => {
            (item && typeof item === 'object') || typeof item === 'function' ?
                typeof item.then === 'function' && item.then(res => { processData(i, res) }, reject) : processData(i, item)
        })
    })
}
let p1 = Promise.resolve(1)
let p2 = new Promise(res => {
    setTimeout(() => {
        res(2)
    })
})
let p3 = Promise.reject(5)

// Promise.race([p2, p1]).then(res => {
//     console.log(res)
// })

Promise.all([p2, p1, 3,p3]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
