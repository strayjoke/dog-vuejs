import request from '@/utils/request.js'

export function selectDictDataByType(type) {
    return request({
        url: '/dictDatas',
        method: 'get',
        params: { type }
    })
}

export function selectDictTypes() {
    return request({
        url: '/dictTypes',
        method: 'get',
    })
}