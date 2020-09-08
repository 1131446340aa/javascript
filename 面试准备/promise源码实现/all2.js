let p1 = Promise.resolve(1)

let p2 = Promise.resolve(2)

let p3 = Promise.reject(3)


Promise.all = function (values) {
    return new Promise((resolve, reject) => {
        let arrayPromise = []
        let i = 0
        function PromiseArr(index, value) {
            arrayPromise[index] = value
            if (++i === values.length) {
                resolve(arrayPromise)
            }
        }
        // for (let i = 0; i < values.length; i++) {
        //     (values[i] && typeof values[i] === 'object') || typeof values[i] === 'function' ?
        //         typeof values[i].then === 'function' && values[i].then(res => { PromiseArr(i, res) }, reject) : PromiseArr(i, values[i])
        // }
        values.forEach((item, i) => {
            (item && typeof item === 'object') || typeof item === 'function' ?
                typeof item.then === 'function' && item.then(res => { PromiseArr(i, res) }, reject) : processData(i, item)
        })
    })
}

Promise.all([p1, p2, p3]).then(res => {
    console.log(res)
}).catch(res => {
    console.log(res)
})