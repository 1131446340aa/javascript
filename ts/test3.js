let symbol = Symbol('3')
let a ={
    b:3,
    c:3,
    [symbol]:'hello'
    // ['x']=Symbol(3)
}
// Object.defineProperty(a,'b',{
//     writable:false,
//     configurable:false,
//     enumerable:false
// })

// console.log(a[symbol]);

// for(let item in a){
//     console.log(item);
    
// }
// console.log(a['x']);

// Object.getOwnPropertySymbols(a).forEach(symbol=>{
//     console.log(a[symbol]);
    
// })
// console.log(Reflect.ownKeys(a));

// console.log(Object.values(a));
// console.log(Object.entries(a));

// let arr =[1234,345]

// for (let item of arr.entries()){
//     console.log(item);    
// }