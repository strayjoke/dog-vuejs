import request from '@/utils/request.js'

export function initData(url, params) {
    return request({
        url,
        method: 'get',
        params
    })
}