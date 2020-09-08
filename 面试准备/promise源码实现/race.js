// Promise.race = function(values){
//     return new Promise((resolve,reject)=>{
//         for(let i = 0 ; i< values.length;i++){
//             let current = values[i];
//             if((typeof current === 'object' &&  current !==null)|| typeof current == 'function'){
//                 let then = current.then;
//                 if(typeof then == 'function'){ // 比较哪个promise比较快，谁快用快          
//                     then.call(current,resolve,reject)
//                 }else{               
//                     resolve(current);
//                 }
//             }else{
//                 resolve(current);
//             }
//         }
//     });
// }
// Promise.all = function (arr) {
//     if (!Array.isArray(arr)) {
//         return false
//     }
//     return new Promise((resolve, reject) => {
//         let arrayPromise = []
//         let index = 0
//         function processData(key, value) {
//             arrayPromise[key] = value
//             if (++index === arr.length) {
//                 resolve(arrayPromise)
//             }
//         }
//         arr.forEach((item, i) => {
//             (item && typeof item === 'object') || typeof item === 'function' ? typeof item.then === 'function' 
//             ? item.then(res => {processData(i, res)}, reject): processData(i, item) : processData(i, item)
//         })
//     })
// }
// let p2 = new Promise(res=>{
//     setTimeout(()=>{res(1)},4)
// })
// let p1 = Promise.resolve(1)
// Promise.race([p2,p1]).then(res=>{
//     console.log(res)
// }).catch(res=>{
//     console.log(res)
// })

