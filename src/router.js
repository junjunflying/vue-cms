//引入 vue-loader 并且注册在vue上
import vueRouter from 'vue-router'

import Home from './components/tabbar/HomeContainer.vue'
import Member from './components/tabbar/MemberContainer.vue'
import Shopcar from './components/tabbar/ShopcarContainer.vue'
import Search from './components/tabbar/SearchContainer.vue'

var router = new vueRouter({
    routes:[
        //路由重定向
        {path:'/',redirect:'/home'},

        {path:'/home',component:Home},
        {path:'/member',component:Member},
        {path:'/shopcar',component:Shopcar},
        {path:'/search',component:Search},
    ],
    linkActiveClass:'mui-active'
})
export default router;