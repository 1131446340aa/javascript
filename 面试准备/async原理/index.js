// let p1 = Promise.resolve(1)

// let p2 = new Promise(reslove => {
//     setTimeout(() => {
//         reslove(234)
//     },
//         3000)
// })

// function* test() {
//     let a = yield p1
//     console.log(a);
//     let b = yield p2
//     console.log(b);
// }

// function asyncTogenerate(fn) {

//     let g = fn()

//     function step(value) {
//         let info = g.next(value)
//         if (info.done) {
//             return
//         } else {
//             Promise.resolve(info.value).then(
//                 res => {
//                     step(res)
//                 }
//             )
//         }
//     }
//     step()


// }



// asyncTogenerate(test)



// let p1 =new  Promise((res)=>{
//     res(4)
// })
// // let p2 = Promise.reject(2)

// let p3= Promise.reject(5)

// Promise.race([p1,p3]).then(res=>{
//     console.log(res);

// }).catch(res=>{
//     console.log(res);
// })


// Promise.all([p1,p3]).then(res=>{
//     console.log(res);

// }).catch(res=>{
//     console.log(res+'__________');
// })

// Promise.race([p1,p3]).then(res=>{
//     console.log(res);

// }).catch(res=>{
//     console.log(res);
// })

// let p1 = Promise.resolve(1);
// let p2 = Promise.reject(2);

// Promise.all([p1,p2])


//     .catch((err) => console.log(err))

// Promise.race([p1, p2])
//     .then((res) => console.log(res))

// function test(){
//     console.log();

// }

// const sum = n => {
//     let arr = []
//     for (let i = 0; i < n; i++) {
//         arr[i] = []
//         for (let j = 0; j < n; j++) {
//             j === 0 ? i === 0 ? arr[i][j] = 1 : arr[i][j] = arr[i - 1][j] + i : than()
//             function than() {
//                 let add = i + j + 1
//                 if (add > n) {
//                     add = 2 * n - add + 1
//                 }
//                 arr[i][j] = arr[i][j - 1] + add
//             }
//         }
//     }
//     return arr
// }
// console.log(sum(9));


// let p1 = Promise.resolve(1)
// let p2 = Promise.reject(2)

// Promise.all([p1, p2]).then(console.log(1)
// ).catch(console.log(3)
// )
// Promise.race([p1, p2]).then(console.log(2)
// ).catch(console.log(4)
// )
// async function a() {
//     let x = await p1
//     console.log(x);


// }
// a().then(res=>{
//     console.log(res+"a");

// })

function* gener() {
    let x = yield 1
    console.log(x)
    let y = yield 3

    console.log(y)
}

function generateToAsync(fn) {
    let g = fn()
    function step(value) {
        let info = g.next(value)
        if (info.done) { return } else {
            Promise.resolve(info.value).then(res=>{
                step(res)
            })
        }

    }
    step()

}

