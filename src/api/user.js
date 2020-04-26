import request from '@/utils/request.js'

export function getUserList(query) {
    return request({
        url: '/api/userList',
        method: 'get',
        params: query
    })
}