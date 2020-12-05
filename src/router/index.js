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
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      TabbarShow:true,
      needLogin:true
    },
    children:[
      ...touch
    ]
  },
  {
    path: '*',
    redirect: '/one',
    component:() =>import("../views/one.vue"),
    meta:{
      needLogin:true
    }
},
{
  path: '/about',
  name: 'About',
  component: () => import( '../views/root/About.vue'),
  meta: {
    TabbarShow:true,
    needLogin:true
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
  path: '/shopCard',
  name: 'shopCard',
  component: () => import('../views/root/shopCard.vue'),
  meta: {
    TabbarShow:true,
    needLogin:true
  },
},
...goShop
]

const router = new VueRouter({
  routes
});


router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
      // var cookei = document.cookie
      var token1 = sessionStorage.getItem("token");
      if (token1) {
          next();
      } else {
          next({
              path: '/login',
              query: { redirect: to.fullPath }
          });
      }
  } else {
      next();
  }
});
export default router;