import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
      // 商品二级页面
      path: '/goods',
      name: 'goods',
      component: () => import('../views/Goods')
    }, {
      // 评价二级页面
      path: '/evaluate',
      name: 'evaluate',
      component: () => import('../views/Evaluate')
    }, {
      // 商家二级页面
      path: '/merchant',
      name: 'merchant',
      component: () => import('../views/Merchant')
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
