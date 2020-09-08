

let Array_pro = Array.prototype

let arr_pro_ = Object.create(Array_pro)


let methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort']

methods.forEach(method => {
    let original = Array_pro[method]

    Object.defineProperty(arr_pro_, method, {
        value(...args) {
            return  original.apply(this,args)
        }
    })
})

let arr = [1, 3, 5]
if (Array.isArray(arr)) {
    arr.__proto__ = arr_pro_
    arr.push(3)
    console.log(arr);
}









