import Mock from 'mockjs'

export default {
    mockData() {
        Mock.mock(/api\/sysUsers/, {
            msg: 'success',
            data: [{ "id": 1, "loginName": "admin", "name": "admin" }],
            meta: { "total": 1 }
        })

    }
}
