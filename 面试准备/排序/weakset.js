// let arr =[[1,3]]

// let weakSet = new WeakSet(arr)
// weakSet.add({a:3})
// console.log(weakSet.has(arr[0]));

// console.log(weakSet);

// let map = new Map([['a', 4]])

// let a = 5
// map.set(a, 5)
// console.log(map);

// let set = new Set([1, 3, 4, 5]).add(+0).add(-5)

// console.log(set);


// let wm=new WeakMap()

// wm.set({a:3},5)
// console.log(wm);

// let arr = [1, 3, 5, 7, 2, 8, 6, 4]
// function sort(arr) {
//     let array = []
//     let min = Math.floor((arr.length) / 2)
//     let left = arr.slice(0, min)
//     let right = arr.slice(min)
//     if (left.length > 1) { left = sort(left) }
//     if (right.length > 1) { right = sort(right) }
//     while (left.length && right.length) {
//         left[0] < right[0] ? array.push(left.shift()) : array.push(right.shift())
//     }
//     left.length === 0 ? array.push(...right) : array.push(...left)
//     return array
// }
// console.log(sort(arr));

// function test() { }

// let t = new test()


// function Parent(name, age) {
//     this.name = name
//     this.age = age

// }
// Parent.prototype.run = function () {
//     console.log(this.name, this.age);


// }
// function Children(name, age) {
//     Parent.call(this, name, age)
// }
// Children.prototype.__proto__ = Parent.prototype

// let c = new Children(3, 5)
// c.run()

// function test() { }

// let obj = { a: 3 }

// let x = Object.create(obj)
// // console.log(x.__proto__===obj);

// let obj = {
//     a: 3
// }
// let proxy = new Proxy(obj, key, {
//     get(target, key, receiver) { },
//     set() { }
// })


// let arr = [2, 9, 5, 7, 1, 1, 6, 3, 3, 4]
// function bucketSort(arr) {
//     let bucket = []
//     arr.forEach(item => {

//         bucket[item] ? bucket[item]++ : bucket[item] = 1
//     })
//     let newArr = []
//     bucket.forEach((item, index) => {
//         if (item) {
//             for (let i = 0; i < item; i++) {
//                 newArr.push(index)
//             }
//         }
//     })
//     return newArr
// }
// console.log(bucketSort(arr));

// console.log("bu排序后：", arr.toString())


function mergeSort(arr) {
    const length = arr.length;
    if (length === 1) { //递归算法的停止条件，即为判断数组长度是否为1
        return arr;
    }
    const mid = Math.floor(length / 2);
   
    const left = arr.slice(0,  mid);
    const right = arr.slice(mid, length);
   
    return merge(mergeSort(left), mergeSort(right)); //要将原始数组分割直至只有一个元素时，才开始归并
}

function merge(left, right) {
    const result = [];
    let il = 0;
    let ir = 0;

    //left, right本身肯定都是从小到大排好序的
    while( il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il]);
            il++;
        } else {
            result.push(right[ir]);
            ir++;
        }
        
    }

    //不可能同时存在left和right都有剩余项的情况, 要么left要么right有剩余项, 把剩余项加进来即可
    while (il < left.length) { 
        result.push(left[il]);
        il++;
    }
    while(ir < right.length) {
        result.push(right[ir]);
        ir++;
    }
    return result;
}
console.log(mergeSort([2,9,1,8,3,]))