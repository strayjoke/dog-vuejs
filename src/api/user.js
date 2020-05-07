import request from '@/utils/request.js'

export function getUserList(query) {
    return request({
        url: '/userList',
        method: 'get',
        params: query
    })
}