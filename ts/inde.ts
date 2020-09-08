interface test{
    apply:Function,
    [x:string]:any
}

let x:test={
    apply(){},
}
console.log(x.__proto__)
