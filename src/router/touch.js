import one from '../views/one.vue'
import two from '../views/two.vue'
import three from '../views/three.vue'
import For from '../views/For.vue'
// import goShop from './goShop'
export default [
  {name:'one',path:'/one',component:one},
  {name:'two',path:'/two',component:two},
  {name:'three',path:'/three',component:three
  // children:[
  //   ...goShop
  // ]
},
  {name:'For',path:'/for',component:For}
]
// 路由封装