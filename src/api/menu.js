import request from '@/utils/request.js'

export function getMenuList(query) {
    return request({
        url: '/menuList',
        method: 'get',
        params: query
    })
}