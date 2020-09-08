// 定义一种一对多的依赖的关系,当一个对象发生改变时,他所依赖的对象得到通知.主要降低代码的耦合度.主要降低代码的耦合度
// 事件监听就是一个发布订阅模式


class Listen {
    constructor() {
        this.listener = {}
    }
    buy(type, fn) {
        if (!this.listener[type]) this.listener[type] = []
        this.listener[type].push(fn)
    }
    sold(type, ...parmas) {
        if (!this.listener[type]) return false
        this.listener[type].forEach(fn => {
            fn.apply(this, parmas)
        })
    }
}
let lis = new Listen()

lis.buy('big', (size, money) => {
    console.log(`小明,你买的大房子价格${money},面积为${size}平方米`);
})
lis.buy('big', (size, money) => {
    console.log(`小光,你买的大房子价格${money},面积为${size}平方米`);
})
lis.buy('small', (size, money) => {
    console.log(`小明,你买的小房子价格${money},面积为${size}平方米`);
})
lis.sold('big', 150, 1000000)
lis.sold('small', 80, 500000)