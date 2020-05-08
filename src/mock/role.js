import Mock from 'mockjs'

export default {
    mockData() {
        Mock.mock(/api\/roles/, {
            msg: 'success',
            data: [{ "id": 1, "name": "管理员", "status": 1, "roleKey": "system" }]
        })

        Mock.mock(/api\/getRelatedSysUsers/, {
            msg: 'success',
            data: [{ "id": 1, "loginName": "admin", "name": "admin" }],
            meta: { "total": 1 }
        })

    }
}
