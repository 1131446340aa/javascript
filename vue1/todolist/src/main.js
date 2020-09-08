import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ab from './myComponent/a'
Vue.use(ab)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
