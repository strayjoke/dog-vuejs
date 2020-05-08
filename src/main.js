import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'

import '@/plugins/dict' //加载字典数据
import '@/directives'  //加载指令

import '@/assets/css/common.scss'
import '@/icons'

import * as filters from '@/filters'

import Mock from '@/mock'

Mock.mockData()

//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})



Vue.config.silent = true // 取消 Vue 所有的日志与警告

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
