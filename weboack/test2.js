
// let a =Symbol("a")

// console.log(a);



let a = { x: 3 }

let b = Object.create(a)

let x =Object.keys(b)

console.log(x)
let c=[1,3,5]

for(let m in b){
    console.log(m)
}