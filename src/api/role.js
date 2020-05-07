import request from '@/utils/request.js'

export function getRoleList(query) {
    return request({
        url: '/roleList',
        method: 'get',
        params: query
    })
}