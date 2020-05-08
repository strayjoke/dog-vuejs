import Mock from 'mockjs'

export default {
    mockData() {
        Mock.mock(/api\/login/, {
            msg: 'success',
            data: { token: Mock.Random.string(15) }
        })

        Mock.mock(/api\/logout/, {
            msg: 'success',
            data: {}
        })

        Mock.mock(/api\/auth\/info/, {
            msg: 'success',
            data: { "roles": [], "id": 1, "loginName": "admin", "name": "admin" }
        })

        Mock.mock(/api\/auth\/permissions/, {
            msg: 'success',
            data: {
                menuPermissions: [
                    {
                        type: 1, icon: "menu", "id": 1, "path": "", "pid": 0, "filePath": "", "orderNum": 10, "name": "系统管理", "hidden": 0,
                        "children": [
                            { "type": 2, "icon": "file", "id": 2, "path": "system/menu", "pid": 1, "filePath": "system/menu/MenuList", "orderNum": 20, "name": "菜单管理", "hidden": 0, "children": [] },
                            { "type": 2, "icon": "file", "id": 3, "path": "system/role", "pid": 1, "filePath": "system/role/RoleList", "orderNum": 30, "name": "角色管理", "hidden": 0, "children": [] },
                            { "type": 2, "icon": "file", "id": 4, "path": "system/user", "pid": 1, "filePath": "system/user/UserList", "orderNum": 40, "name": "用户管理", "hidden": 0, "children": [] },
                            { "type": 2, "icon": "file", "id": 7, "path": "system/dict", "pid": 1, "filePath": "system/dict/DictList", "orderNum": 40, "name": "字典管理", "hidden": 0, "children": [] },
                            { "type": 2, "icon": "file", "id": 8, "path": "system/role/relatedUser/:roleId", "pid": 1, "filePath": "system/role/RelatedUser", "orderNum": 40, "name": "分配角色", "hidden": 1, "children": [] },
                            { "type": 2, "icon": "file", "id": 9, "path": "system/dictData", "pid": 1, "filePath": "system/dict/DictData", "orderNum": 40, "name": "字典数据", "hidden": 1, "children": [] }
                        ]
                    }],
                btnPermissions: ["system:menu:add", "system:menu:search"],
                pagePermissions: ["system/menu", "system/role", "system/user", "system/dict", "system/role/relatedUser/", "system/dictData"]
            }
        })
    }
}
