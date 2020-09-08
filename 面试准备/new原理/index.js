function test() {



}

function _new(fn) {
    if (typeof fn === 'function') {
        let obj = {}
        obj.__proto__ = fn.prototype
        let res = fn.call(obj)
        return (res && typeof res === 'object') ? res : obj
    }
}

let a = _new(test)
test.prototype.fn = 3
console.log(a);


function instance(left, right) {
    right = right.prototype
    while (left = left.__proto__) {
        if (left === right) {
            return true
        }
    }
    return false
}
let b = new test()
let num = 5
console.log(instance(num, Array));

//过程
// var test
// test.prototype=run.__proto__
// 执行代码并绑定this
// 返回值
// 如果无返回值或者返回值非对象则返回test,否则返回对象

let obj1 = { a: 3 }
let obj = function (a) { }
let proxy = new Proxy(obj, {
    get(target, key, reciver) {

        return target[key]
    },
    set(target, key, value, reciver) {
        target[key] = value
    },
    apply(target, key, args) {
        console.log(target, key, args);

    }
})
proxy.call(obj1,3)

console.log(Reflect.get(obj1,'a'));
Reflect.set(obj1,'name',5)
console.log(obj1);

console.log(new Set([+0,-0,NaN,NaN]));
console.log(NaN===NaN);






