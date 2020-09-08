

function Fibonacci(n) {
    // write code here、
    let f = 0,
        g = 1,
        res = 0
    while (n--) {
        g += f;
        f = g - f;
        res += f
    }
    return res;
}
// g 代表下一个, f代表当前这个
console.log(Fibonacci(5))

