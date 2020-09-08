// class A {
//     constructor(name) {
//         this.name = name
//     }
// }
// let a = new A(3)
// console.log(a.name);
import './index.less'
import p from './public.jpg'
let img = new Image()
img.src = p
document.body.appendChild(img)
