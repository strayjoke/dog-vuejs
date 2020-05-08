import Vue from 'vue'
import VueRouter from 'vue-router'
import staticRoutes from './routes'
import TheLayout from '@/layout/TheLayout'
import routeUtils from '@/utils/routeUtils'

Vue.use(VueRouter) //安装vue-router插件

const router = new VueRouter({
  mode: 'history',
  routes: staticRoutes,
})

//前置导航守卫
router.beforeEach((to, from, next) => {
  const app = router.app
  const store = app.$options.store
  const auth = store.state.auth
  const token = store.state.auth.token

  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!auth.user.roles || !auth.routes) {
        store.dispatch('getUserInfo').then(() => {
          store.dispatch('getPermissions').then(res => {
            const routesContainer = [{ path: '/', component: TheLayout, children: [] }]
            routeUtils(routesContainer[0].children, res)
            store.commit('SET_ROUTES', staticRoutes.concat(routesContainer))
            router.addRoutes(routesContainer)
            next({ ...to, replace: true })
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
