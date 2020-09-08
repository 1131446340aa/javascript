/**
@author 黄力豪
@desc 深拷贝
@date 2020-06-30 13:24:55
@Email 1131446340@qq.com
*/
// 获取类型
const Type = param => Object.prototype.toString.call(param)

//获取正则标识
const getRegFlags = reg => (reg + "").replace(/\/(.*)\//, "")

const clone = param => {
    //声明父子数组解决循环引用
    let parent = []
    let children = []
    //判断条件过多,声明map数据结构.也可以使用对象
    let map = new Map()
    const _clone = param => {
        let child, proto
        //如果为值类型数据
        if ((typeof param !== 'object' && typeof param !== 'function') || param===null) {
            child = param
        }
        //如果为引用数据类型
        else {  
            //对函数进行克隆
            map.set('[object Function]', () => {
                //获取函数字符串并使用eval函数将字符串当做js代码执行
                let fn = param.toString()
                child = eval(`(${fn})`)
            })
            //对数组进行克隆
            map.set('[object Array]', () => {
                child = []
            })
            //对对象进行克隆
            map.set('[object Object]', () => {
                //为孩子重新构造原型关系
                proto = Object.getPrototypeOf(param)
                child = Object.create(proto)
            })
            //对正则进行克隆
            map.set('[object RegExp]', () => {
                child = new RegExp(param.source, getRegFlags(param))
            })
            //对日期进行克隆
            map.set('[object Date]', () => {
                child = new Date(Date.parse(param))
            })
        }
        //如果是引用数据类型(map只加了引用数据类型) 执行函数
        map.has(Type(param)) && map.get(Type(param))()
        // 处理循环引用
        const index = parent.indexOf(param)
        // 如果前面已经引用过,直接返回此对象如下例中,引用过两次oldObj
        if (index !== -1) return children[index]
        parent.push(param)
        children.push(child)
        //如果param不为null且param为对象
        param && typeof param === 'object' && Reflect.ownKeys(param).forEach(item => {
            //递归调用
            child[item] = _clone(param[item])
        })
        return child
    }
    return _clone(param)
}

function person(name) {
    this.name = name;
}

const HuangLiHao = new person('HuangLiHao');

function fn() {
    console.log('3');
}
let xx = Symbol('xx')

let obj = { y: 3 }

let oldObj = {
    a: fn,
    c: new RegExp('ab+c', 'gi'),
    d: HuangLiHao,
    x: new Date(),
    mum: 10,
    bool: true,
    str: '3',
    null: null,
    und: undefined,
    sym: Symbol(123),
    [xx]: 5,
    array:[1,3,4,[2,4]]
}
oldObj.b = oldObj
oldObj.__proto__ = obj
let newObj = clone(oldObj)
console.log(newObj);
console.log(newObj.y);