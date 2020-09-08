import $ from 'expose-loader?$!jquery'
let logo = require('./result.png');
console.log(logo);
console.log(window.$);
let image=new Image()
image.src=logo.default
document.querySelector('body').appendChild(image)
require('./index.less')

// require('@babel/polyfill')
// let fn = () => {
//     console.log(1);

// }
// fn()
// class A {
//     constructor() {
//         this.a = 3
//     }
// }
// let a = new A()
// console.log(a.a);

// function* gen() {
//     yield console.log(3);

// }
// let g = gen()
// g.next()

// let arr=[1,3,4]
// console.log(arr.includes(2));