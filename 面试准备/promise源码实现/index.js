class MyPromise {
    constructor(fn) {
        if (typeof fn !== 'function') {
            throw new TypeError('please input a function')
        }
        this.resloveArr = []
        this.rejectArr = []
        this.init()
        fn(this.reslove.bind(this), this.reject.bind(this))
    }
    reslove(value) {
        if (MyPromise.pending === this.state) {
            this.state = MyPromise.reslove

            this.value = value
            this.resloveArr.forEach(fn => {
                fn(this.value)
            })
        }
    }
    init() {
        this.state = MyPromise.pending
        this.value = null
        this.reason = null
    }
    reject(reason) {
        if (MyPromise.pending === this.state) {
            this.state = MyPromise.reject
            this.reason = reason
            this.rejectArr.forEach(fn => {
                fn(this.reason)
            })
        }
    }
    then(onreslove, onreject) {

        if (typeof onreslove !== 'function') {
            onreject = function () { }

        }
        if (typeof onreject !== 'function') {
            onreject = function () {

            }
        }
        let promise2 = new MyPromise((reslove, reject) => {

            if (this.state === MyPromise.reslove) {
                setTimeout(() => {
                    try {
                        const x = onreslove(this.value)
                        MyPromise.reslovePromise(promise2, x, reslove, reject)
                    }
                    catch (e) {
                        reject(e)
                    }
                });
            }
            if (this.state === MyPromise.reject) {
                setTimeout(() => {
                    try {
                        const x = onreject(this.reason)
                        MyPromise.reslovePromise(promise2, x, reslove, reject)
                    }
                    catch (e) {
                        reject(e)
                    }
                });
            }


            if (this.state === MyPromise.pending) {
                this.resloveArr.push(value => {
                    setTimeout(() => {
                        try {
                            const x = onreslove(value)
                            MyPromise.reslovePromise(promise2, x, reslove, reject)
                        }
                        catch (e) {
                            reject(e)
                        }
                    });
                })
                this.rejectArr.push(reason => {
                    setTimeout(() => {
                        try {
                            const x = onreject(reason)
                            MyPromise.reslovePromise(promise2, x, reslove, reject)
                        }
                        catch (e) {
                            reject(e)
                        }
                    });
                })
            }
        })
        return promise2
    }
}
MyPromise.reslovePromise = function (promise2, x, reslove, reject) {
    if (promise2 === x) {
        throw Error('cycle error')
    }
    else if (x instanceof MyPromise) {
        x.then(res => {
            MyPromise.reslovePromise(promise2, res, reslove, reject)
        }, reason => {
            reject(reason)
        })
    }
    // else if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
    //     if (typeof x.then === 'function') {
    //         x.then(res => {
    //             MyPromise.reslovePromise(promise2, res, reslove, reject)
    //         }, reason => {
    //             reject(reason)
    //         })
    //     }
    // }
    else {
        reslove(x)
    }
}
MyPromise.pending = "PENDING"
MyPromise.reject = "REJECT"
MyPromise.reslove = "RESLOVE"
let p = new MyPromise(res => {
    setTimeout(() => {
        res(3)
    }, 300)
})
p.then(res => {
    console.log(res);
    return new MyPromise(res => {
        setTimeout(() => {
            res(7)
        }, 3000)
    })
}).then(res => {
    console.log(res);
})