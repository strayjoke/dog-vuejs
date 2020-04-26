import request from '@/utils/request.js'

export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export function getUserInfo() {
    return request({
        url: '/auth/info',
        method: 'get'
    })
}

export function getPermissions() {
    return request({
        url: '/auth/permissions',
        method: 'get'
    })
}

export function logout() {
    return request({
        url: '/logout',
        method: 'post'
    })
}