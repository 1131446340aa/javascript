function Myflat(arr, level = 1) {
    let arr1
    function flat(arr) {
        arr1 = []
        if (arr instanceof Array) {
            arr.forEach(item => {
                if (item instanceof Array) {
                    arr1.push(...item)
                } else {
                    arr1.push(item)
                }
            })
        }
    }
    for (let i = 0; i < level; i++) {
        if (i === 0) {
            flat(arr)
        } else {
            flat(arr1)
        }
    }
    return arr1
}
function Instance(left, right) {
    left = left.__proto__
    right = right.prototype
    while (left) {
        if (left === right) {
            return true
        }
        left = left.__proto__
    }
    return false
}


function New(Parent, ...params) {
    if (typeof Parent === 'function') {
        
        child= Object.create(Parent.prototype)
        let result = Parent.apply(child, params)
        return typeof result === "object" ? result : child
    }

}
function test() {
    this.a = 3
}
let t = New(test)
console.log(Instance(t,test));

