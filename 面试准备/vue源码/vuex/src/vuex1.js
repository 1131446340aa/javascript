

let Vue

const install = _vue => {
    Vue = _vue
    Vue.mixin({
        beforeCreate() {
            if (this.$options && this.$options.store) {
                this.$store = this.$options.store
            }
            else {
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}

class ModileCollection {
    constructor(opts) {
        this.register([], opts)
    }
    register(path, rootModule) {
        let newModule = {
            _raw: rootModule,
            _children: {},
            _state: rootModule.state
        }
        if (path.length === 0) {
            this._root = newModule
        }
        else {
            let parent = path.slice(0, -1).reduce((root, current) => {
                return root._children[current]
            }, this._root)
            parent._children[path[path.length - 1]] = newModule
        }
        if (rootModule.modules) {
            Object.keys(rootModule.modules).forEach(moduleName => {
                this.register(path.concat(moduleName), rootModule.modules[moduleName])
            })
        }
    }
}

const collectionModule = (store, state, path, rootModule) => {
    let getters = rootModule._raw.getters
    if (path.length > 0) {
        let parent = path.slice(0, -1).reduce((state, current) => {
            return state[current]
        }, state)
        Vue.set(parent, [path[path.length - 1]], rootModule._state)

    }
    if (getters) {
        Object.keys(getters).forEach(getter => {
            Object.defineProperty(store.getters, getter, {
                get() {
                    return getters[getter](rootModule._state)
                }
            })
        })
    }

    let mutations = rootModule._raw.mutations

    if (mutations) {
        Object.keys(mutations).forEach(mutation => {
            let arr = store['mutations'][mutation] || (store['mutations'][mutation] = [])
            arr.push((...parmas) => {
                mutations[mutation].call(store, rootModule._state, ...parmas)
            })

        })
    }
    let actions = rootModule._raw.actions

    if (actions) {
        Object.keys(actions).forEach(action => {
            let arr = store['actions'][action] || (store['actions'][action] = [])
            arr.push((...parmas) => {
                actions[action].call(store, store, ...parmas)
            })

        })
    }

    if (rootModule._children) {
        Object.keys(rootModule._children).forEach(moduleName => {
            collectionModule(store, state, path.concat(moduleName), rootModule._children[moduleName])
        })
    }
}

class Store {
    constructor(opts) {
        this.vm = new Vue({
            data() {
                return {
                    state: opts.state
                }
            }
        })
        this.getters = {}
        this.mutations = {}
        this.actions = {}
        this.modules = new ModileCollection(opts)
        collectionModule(this, this.state, [], this.modules._root)
    }
    get state() {
        return this.vm.state
    }
    commit = (type, ...parmas) => {
        this.mutations[type].forEach(fn => {
            fn(...parmas)
        })
    }
    dispatch = (type, ...parmas) => {
        this.actions[type].forEach(fn => {
            fn(...parmas)
        })
    }
}

export default {
    install, Store
}