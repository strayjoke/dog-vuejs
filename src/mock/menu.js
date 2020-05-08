import Mock from 'mockjs'

export default {
    mockData() {
        Mock.mock(/api\/menus/, {
            msg: 'success',
            data: [{
                "id": 1, "pid": 0, "name": "系统管理", "orderNum": 10, "type": 1, "filePath": "", "path": "", "method": 1, "hidden": 0,
                "children": [
                    { "id": 2, "pid": 1, "name": "菜单管理", "orderNum": 20, "type": 2, "filePath": "system/menu/MenuList", "path": "system/menu", "method": 1, "hidden": 0 },
                    { "id": 3, "pid": 1, "name": "角色管理", "orderNum": 30, "type": 2, "filePath": "system/role/RoleList", "path": "system/role", "method": 1, "hidden": 0 },
                    { "id": 4, "pid": 1, "name": "用户管理", "orderNum": 40, "type": 2, "filePath": "system/user/UserList", "path": "system/user", "method": 1, "hidden": 0 },
                    { "id": 5, "pid": 1, "name": "新增", "orderNum": 1, "type": 3, "filePath": "system:menu:add", "path": " ", "method": 1, "hidden": 0 },
                    { "id": 6, "pid": 1, "name": "查询", "orderNum": 1, "type": 3, "filePath": "system:menu:search", "path": " ", "method": 1, "hidden": 0 },
                    { "id": 7, "pid": 1, "name": "字典管理", "orderNum": 40, "type": 2, "filePath": "system/dict/DictList", "path": "system/dict", "method": 1, "hidden": 0 },
                    { "id": 8, "pid": 1, "name": "分配角色", "orderNum": 40, "type": 2, "filePath": "system/role/RelatedUser", "path": "system/role/relatedUser/:roleId", "method": 1, "hidden": 1 },
                    { "id": 9, "pid": 1, "name": "字典数据", "orderNum": 40, "type": 2, "filePath": "system/dict/DictData", "path": "system/dictData", "method": 1, "hidden": 1 }]
            }]
        })
    }
}
