import Vue from 'vue'
import Router from 'vue-router'
import todoList from '../components/todoList'
import About from '../components/about'
Vue.use(Router)
export default new Router({
    routes: [{
        path: "/",
        component: todoList
    },
    {
        path: "/About",
        component: About
    }],
    mode: 'history'
})