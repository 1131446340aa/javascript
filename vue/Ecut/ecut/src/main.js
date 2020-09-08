// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import { Upload, Icon as Icon1 } from 'element-ui';
import "./assets/font/iconfont.css";
import "./assets/font/iconfont.js";
import Navigation from 'vue-navigation'
import { Tabbar, TabbarItem } from 'vant';
import {
  IndexBar, IndexAnchor, Divider, Search, Lazyload, Tab, Tabs, Swipe, SwipeItem, NavBar, Icon,
  Field, Button, Cell, CellGroup, GoodsAction, GoodsActionIcon, GoodsActionButton, Collapse, CollapseItem, Popup, Picker, Loading, Toast
  , Checkbox, CheckboxGroup, Notify, Rate, SwipeCell, Skeleton, NumberKeyboard, Form
} from 'vant';

// import waterfall from 'vue-waterfall2'
// Vue.use(waterfall)
Vue.use(SwipeCell);
Vue.use(Skeleton);
Vue.use(Upload);
Vue.use(Icon1)
Vue.use(NumberKeyboard);
Vue.use(Form);
Vue.use(Rate);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Notify);
Vue.use(Toast);
Vue.use(Loading);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Button);
Vue.use(Field);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Lazyload);
Vue.use(Search);
Vue.use(Divider);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Navigation, { router });
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
