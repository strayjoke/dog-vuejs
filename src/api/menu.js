import request from './request.js'

export function getMenuList(query) {
    return request({
        url: '/api/menuList',
        method: 'get',
        params: query
    })
}