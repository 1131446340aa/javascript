class Event {
    constructor() {
        this.listener = {}
    }
    listen(type, fn) {
        if (!this.listener[type]) {
            this.listener[type] = []
        }
        this.listener[type].push(fn)
    }
    target(type, ...args) {
        if (this.listener[type]) {
            this.listener[type].forEach(fn => {
                fn.apply(this, args)
            })
        }
    }
}
let event = new Event()
event.listen('big', (size, money) => {//添加big类型
    console.log(`小明,你买的大房子价格${money},面积为${size}平方米`);
})
event.listen('big', (size, money) => {//big类型的第二个用户
    console.log(`小光,你买的大房子价格${money},面积为${size}平方米`);

})
event.listen('small', (size, money) => {//添加small类型
    console.log(`小红,你买的小房子价格${money},面积为${size}平方米`);
})
event.target('big',23,34)