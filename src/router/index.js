import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/root/Home.vue'
import touch from '../router/touch'
import goShop from '../router/goShop'
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/one',
    name: 'Home',
    component: Home,
    meta: {
      TabbarShow:true
    },
    children:[
      ...touch
    ]
  },
  {
    path: '*',
    redirect: '/one',
    component:() =>import("../views/one.vue")
},
{
  path: '/about',
  name: 'About',
  component: () => import( '../views/root/About.vue'),
  meta: {
    TabbarShow:true
  },
},{
  path: '/login',
  name: 'login',
  component: () => import( '../views/root/login.vue'),
  meta: {
    TabbarShow:true
  },
},
{
  path: '/setting',
  name: 'setting',
  component: () => import('../views/root/setting.vue'),
  meta: {
    TabbarShow:true
  },
},
...goShop
]

const router = new VueRouter({
  routes
})

export default router
