import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message, MessageBox } from 'element-ui'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: process.env.VUE_APP_TIMEOUT // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        config.headers.common['Authorization'] = `Bearer ` + store.state.auth.token
        return config
    },
    error => {
        // Do something with request error
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        return response.data
    },

    error => {
        // 处理网络请求
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
            Message({
                message: '网络请求超时，请稍后重试',
                type: 'error',
                duartion: 3000
            })
        }
        if (error && error.response) {
            switch (error.response.status) {
                case 401:
                    MessageBox.confirm('会话过期，请重新登录', '确认', {
                        confirmButtonText: '重新登录',
                        showCancelButton: false,
                        showClose: false,
                        closeOnClickModal: false,
                        closeOnPressEscape: false,
                        type: 'warning'
                    }
                    ).then(() => {
                        store.dispatch('logout').then(() => {
                            router.push(`/login`)
                        })
                    })
                    break
                case 403:
                    MessageBox.confirm(error.response.data.msg, '警告', {
                        confirmButtonText: '确认',
                        showCancelButton: false,
                        showClose: false,
                        closeOnClickModal: false,
                        closeOnPressEscape: false,
                        type: 'warning'
                    }
                    )
                    break
                default:
                    Message({
                        message: error.response.data.msg || '网络请求异常，请联系管理员！',
                        type: 'error',
                        duration: 3000
                    })
            }
            return Promise.reject(error.response.data)
        }
    }
)

export default service
