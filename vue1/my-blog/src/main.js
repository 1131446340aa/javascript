import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Navigation from 'vue-navigation'
import { Button, CarouselItem, Carousel, Divider, InfiniteScroll, Timeline, TimelineItem, Card } from 'element-ui';
import "./assets/font/iconfont.css";
import "./assets/font/iconfont.js";

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Button)
Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(Divider)
Vue.use(InfiniteScroll)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Card)
Vue.use(Navigation, { router });

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
