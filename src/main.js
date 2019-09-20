console.log("ok");

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import App from './App.vue'

import './css/default.css'

import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

//引入mint-ui的轮播图组件 并且注册为全局组件
import { Swipe, SwipeItem, Toast } from 'mint-ui';
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

//测试注册自己的组件 name
import login from './components/login.vue'
Vue.component(login.name,login)


var vm = new Vue({
    el:'#app',
    render:c=>c(App),
    router
})  