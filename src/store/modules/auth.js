import ls from '@/utils/localStorage'
import { login, getPermissions, logout, getUserInfo } from '@/api/auth'

const state = {
    token: ls.getItem('token') || '',
    user: {
        name: '',
        loginName: '',
        roles: null
    },
    permissions: {
        btnPermissions: [],
        pagePermissions: [],
        routesPerssions: []
    },
    routes: []
}

const mutations = {
    SET_TOKEN: (state, value) => {
        state.token = value
        ls.setItem('token', value)
    },
    SET_USER: (state, value) => {
        state.user.name = value.name
        state.user.loginName = value.loginName
        state.user.roles = value.roles
    },
    SET_PERMISSIONS: (state, value) => {
        state.permissions.btnPermissions = value.btnPermissions
        state.permissions.pagePermissions = value.pagePermissions
    },
    SET_ROUTES: (state, value) => {
        state.routes = value
    }
}

const actions = {
    login({ commit }, data) {
        return new Promise((resolve, reject) => {
            login(data).then(res => {
                commit('SET_TOKEN', res.data.token)
                resolve()
            }).catch(err => {
                reject(err)
            })
        })
    },
    getUserInfo({ commit }) {
        return new Promise((resolve, reject) => {
            getUserInfo().then(res => {
                commit('SET_USER', res.data)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    getPermissions({ commit }) {
        return new Promise((resolve, reject) => {
            getPermissions().then(res => {
                commit('SET_PERMISSIONS', res.data)
                resolve(res.data.menuPermissions)
            }).catch(err => {
                reject(err)
            })
        })
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            logout().then(res => {
                commit('SET_TOKEN', '')
                ls.removeItem('token')
                resolve()
            }).catch(err => {
                commit('SET_TOKEN', '')
                ls.removeItem('token')
                reject(err)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}