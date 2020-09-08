// const { throttle } = require("lodash");

const { throttle, debounce } = require("lodash");

// const { throttle } = require("lodash");

// function throll(fn, wait, li_ke = false) {
//     if (!li_ke) {
//         let timer
//         return function (...parma) {
//             if (!timer) {
//                 timer = setTimeout(() => {
//                     fn.call(this, ...parma)
//                     timer = null
//                 }, wait);
//             }
//         }
//     }
//     let Time = 0
//     return function (...parma) {
//         let cur = Date.now()
//         if (cur - Time > wait) {
//             fn.call(this, ...parma)
//             Time = Date.now()
//         }
//     }
// }

// let run = throttle((x) => {
//     console.log(x);

// }, 300,true)
// run(4)
// run(4)
// setTimeout(() => {
//     run(5)
// }, 500);
