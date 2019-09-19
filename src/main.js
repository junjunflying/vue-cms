console.log("ok");

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import App from './App.vue'

import './css/default.css'

import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el:'#app',
    render:c=>c(App)
})  