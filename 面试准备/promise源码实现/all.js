let p1 = Promise.resolve(1)
let p2 =  new Promise(res=>{
    setTimeout(()=>{
        res(2)
    },3000)
})

//判断是不是一个promise
function isPromise(value){
    if(typeof value === 'function' || (typeof value === 'object' && value != null)){
        if(typeof value.then === 'function'){
            return true;
        }
    }
    return false;
}

Promise.all = function(values){
    return new Promise((resolve,reject)=>{
        let arr = [];
        let i = 0;
        let processData = function(key,value){
            arr[key] = value;
            if(++i === values.length){
                resolve(arr)
            }
        }
        for(let i = 0; i < values.length; i++){
            let current = values[i];
            if(isPromise(current)){   //判断传进来的是promise还是普通数据
                current.then(y=>{
                    processData(i,y)
                },reject)
            }else{
                processData(i,current)
            }
        }
    })
}
Promise.all([p2,p1,3]).then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})