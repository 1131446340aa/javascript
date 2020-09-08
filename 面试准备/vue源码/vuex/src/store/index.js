import Vue from 'vue'
import Vuex from '../vuex1'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 10
  },
  getters: {
    myage(state) {
      return state.name + 10
    }
  },
  mutations: {
    syncAdd(state, parmas) {
      state.name += parmas
    },
    syncsub(state, parmas) {
      state.name -= parmas
    }
  },
  actions: {
    asyncSub({ commit, dispatch }, ...parmas) {
      setTimeout(() => {
        commit('syncsub', ...parmas)
      }, 1000);
    }
  },
  modules: {
    a: {
      state: {
        x: 1,

      },
      getters: {
        y(state) {
          return state.x + 3
        }
      },
      // modules: {
      //   c: {
      //     state: {
      //       a: 8
      //     }
      //   }
      // },
      mutations: {
        syncAdd(state, parmas) {
          console.log(123);
          
        }

      },
    },
    b: {
      state:{}
    }
  }
})
