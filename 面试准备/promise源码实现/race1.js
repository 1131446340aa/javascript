

Promise.race=function(values){
    return new Promise((resolve,reject)=>{
        values.forEach(value=>{
            (value && typeof value ==='object') || typeof value ==='function' ?
             typeof value.then ==='function' && value.then(resolve,reject) : resolve(value)
        })
    })
}
let p1 = Promise.resolve(1)

let p2 = Promise.reject(2)

Promise.race([p2,p1]).then(res=>{
    console.log(res)
}).catch(res=>{
    console.log(res)
})