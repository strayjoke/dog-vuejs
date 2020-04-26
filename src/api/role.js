import request from './request.js'

export function getRoleList(query) {
    return request({
        url: '/api/roleList',
        method: 'get',
        params: query
    })
}