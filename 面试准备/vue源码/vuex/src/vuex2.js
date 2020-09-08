let Vue

const install = _vue => {
    Vue = _vue
    Vue.mixin({
        beforeCreate() {
            if (this.$options && this.$options.Store) {
                this.$store = this.$options.Store
            } else {
                this.$store = this.$parent.$store
            }
        }
    })
}
class ModuleCollection { }

const collectModule = (store, state, path, rootModule) => { }
class Store {
    constructor(opts) {
        this.vm = new Vue({
            data() {
                return {
                    state: opts.state
                }
            },
        })
        this.getter = {}
        this.mutation = {}
        this.action = {}
        this.module = new ModuleCollection(opts)
        collectModule(this, this.state, [], this.module._root)

    }
    get state() {
        return this.vm.state
    }
    commit = (type, ...params) => {
        this.mutation[type].forEach(fn => {
            fn(...params)
        })
    }
    dispatch = () => {
        this.action[type].forEach(fn => {
            fn(...params)
        })
    }

}

export default {
    install, Store
}