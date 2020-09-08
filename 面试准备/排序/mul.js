const { isNumber } = require("util")

function multiply(num1, num2) {
    let res = []
   
   
    
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            let index1 = i + j + 1
            let index2 = i + j
            let mul = num1[i] * num2[j] + (res[index1] || 0)
            res[index1] = mul % 10
            res[index2] =Math.floor( mul / 10 + (res[index2] || 0))
        }
    }
    res=res.join("")

    return +res 
}
let arr = []

class num{

}
let a =new num()


function number(){
    
}
