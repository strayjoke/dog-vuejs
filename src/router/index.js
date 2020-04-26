import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter) //安装vue-router插件

const router = new VueRouter({
  routes,
})

export default router
