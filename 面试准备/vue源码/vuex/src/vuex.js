let Vue //  声明Vue变量

//  先看这里 第一步 

const install = _Vue => { //在main.js文件中使用了Vue.use(Vuex)  可以使用安装函数 . 函数参数为Vue实例
    Vue = _Vue  //将Vue实例赋值到全局变量
    Vue.mixin({
        beforeCreate() {  // 为每一个组件的beforeCreate生命周期添加this.$store
            if (this.$options && this.$options.store) {

                // this.$options 基本等于 main.js中 new Vue({
                //     el: '#app',
                //     router,
                //     store,
                //     components: { App },
                //     template: '<App/>'
                //   })里面的参数

                // 所以 this.$options.store = 类 Store的实例

                this.$store = this.$options.store   //将 this.$options.store 的值赋给 this.$store 
            }
            else {
                this.$store = this.$parent && this.$parent.$store
                // 如果当前组键不存在  this.$options.store 则拿父亲的$store,这样保证所有的this.$store都是同一个store ,也就是类Store的实例

            }
        }
    })
}

const installCollection = (store, state, path, rootModules) => {

    if (path.length > 0) {

        // 和上面基本类似  

        // 主要作用是将 state 由 {name:10}变为
        // {
        //     name: 10, a: {
        //         x: 1,
        //         c: { a:8}
        //     },
        //     b{}
        // }

        let parent = path.slice(0, -1).reduce((state, current) => {
            return state[current]
        }, state)
        Vue.set(parent, [path[path.length - 1]], rootModules.state);
    }

    let getters = rootModules._raw.getters

    // 为你传过来的getters

    if (getters) {
        Object.keys(getters).forEach(getter => {
            // 将所有的getter 属性 劫持在最外层的getters 上 也就是this.$store.getters
            Object.defineProperty(store.getters, getter, {
                get: () => {
                    return getters[getter](rootModules.state)
                    //getters的参数为当前state
                }
            })
        })
    }

    let mutations = rootModules._raw.mutations

    if (mutations) {

        // 为你传过来的mutations
        Object.keys(mutations).forEach(mutation => {


            let arr = store.mutations[mutation] || (store.mutations[mutation] = [])

            // 将this.$store.mutations转化成 {
            //     syncadd:[],
            //     asyncsub:[]
            // }格式
            // 因为执行 如  this.$store.commit('syncAdd', 10);代码 会将所有模块中的syncAdd执行

            arr.push((...parmas) => {
                // 将需要执行的函数放入队列中
                mutations[mutation].call(store, rootModules.state, ...parmas)
            })
        })
    }

    let actions = rootModules._raw.actions
    // 为你传过来的actions
    if (actions) {

        //基本类似mutations ,只是actions的第一个参数为 Store实例 ,mutaions的第一个参数为state 
        Object.keys(actions).forEach(action => {

            let arr = store.actions[action] || (store.actions[action] = [])

            arr.push((...parmas) => {
                actions[action].call(store, store, ...parmas)
            })
        })
    }


    if (rootModules._children) {
        Object.keys(rootModules._children).forEach(moduleName => {
            installCollection(store, state, path.concat(moduleName), rootModules._children[moduleName])
        })
    }
}

// 第三步

class ModelesCollection {

    constructor(options) {
        this.register([], options)  // 调用 register 函数 ,options 如第一次调用 opts 是 new Store 传过来的参数,也就是 index.js中 new Vuex.Store的参数
    }
    register(path, rootModules) {
        let newModules = {
            _raw: rootModules,
            state: rootModules.state || {},
            _children: {}
        }
        if (path.length === 0) {   //  步骤 :3_1  当前的仓库没有父级,让this._root 为newModules   
            this._root = newModules
        } else {
            let parent = path.slice(0, -1).reduce((root, current) => {
                return root._children[current]
            }, this._root)  //获取倒数第二个模块,让其成为父亲,如果长度为1  则父亲为  this._root
            //  步骤 :3_3 
            // parent 分别为 this._root , this._root, a模块
            parent._children[path[path.length - 1]] = newModules
        }
        if (rootModules.modules) {   //  步骤 :3_2   
            Object.keys(rootModules.modules).forEach(moduleName => {
                this.register(path.concat(moduleName), rootModules.modules[moduleName])
                // 联合index 中的数据 
                // 此时 path.concat(moduleName) 分别为 ['a'],['b'],['a','c']
                // rootModules.modules[moduleName] 分别为a模板中的所有数据,b模块中的所有数据,c模块中的所有数据
            })
        }
    }
}

// 第二步

// 上面this.$store 就是这个类的实例

class Store {
    constructor(opts) {  //opts 是 new Store 传过来的参数,也就是 index.js中 new Vuex.Store的参数
        this._vm = new Vue({
            data() {
                return {
                    state: opts.state
                }
            }
        })
        // 将state中的数据放入vue中的data中

        this.getters = {}  //创建一个空的getters 对象
        this.mutations = {} //创建一个空的mutations 对象
        this.actions = {}  // 创建一个空的actions对象
        this.modules = new ModelesCollection(opts)  //跳转到第三步
        installCollection(this, this.state, [], this.modules._root)
        // 跳转到第四步 参数分别为 Store的实例 , 就是你使用的this.$store , 最外层的 state , 路径  空数组 代表无父亲 为 root , 如[a,b,c]则,a的父亲为root,b的父亲为a,c的父亲为b
        //第四个参数 就是这类数据
        //  {
        //     _raw: rootModules,
        //     state: rootModules.state || {},
        //     _children: {}
        // }
    }

    get state() {
        return this._vm.state  //当读 this.$store.state 时触发 ,返回 opts.state ,也就是仓库中的state
    }
    commit = (type, ...parmas) => {
        //执行所有type 类型的函数
        this.mutations[type].forEach(fn => {
            fn(...parmas)
        })
    }
    dispatch = (type, ...parmas) => {

        // 基本同 commit
        
        this.actions[type].forEach(fn => {
            fn(...parmas)
        })
    }
}


export default {
    Store,
    install
}