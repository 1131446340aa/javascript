

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Navigation from 'vue-navigation'
import { Icon } from 'vant';
import { Grid, GridItem } from 'vant';
import { Search } from 'vant';
import { Slider } from 'vant';
import store from '../src/vuex/store'
import { Area } from 'vant';
import { Notify } from 'vant';
import { Lazyload } from 'vant';
import { Button } from 'vant';
import { Field } from 'vant';
import { Toast } from 'vant';
import { Collapse, CollapseItem } from 'vant';
Vue.use(Navigation,{router});
Vue.use(Collapse).use(CollapseItem);
Vue.use(Toast);
Vue.use(Field);
Vue.use(Button);
// options 为可选参数，无则不传
Vue.use(Lazyload);
Vue.use(Notify);
Vue.use(Area);
Vue.use(Slider);
Vue.use(Search)
Vue.use(Grid).use(GridItem);
Vue.use(Icon);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



