import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './router'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  routes: routers
}

const router = new VueRouter(RouterConfig)

export default router
