import Mock from 'mockjs'

export default {
    mockData() {
        Mock.mock('/api/dictDatas?type=sys_show_hide', {
            msg: 'success',
            data: [
                { "id": 1, "value": "1", "label": "显示", "listClass": "primary", "type": "sys_show_hide", "sort": 10, "status": 1 },
                { "id": 2, "value": "2", "label": "隐藏", "listClass": "pirimary", "type": "sys_show_hide", "sort": 10, "status": 1 }
            ]
        })
        Mock.mock('/api/dictDatas?type=sys_http_method', {
            msg: 'success',
            data: [
                { "id": 9, "value": "1", "label": "GET", "listClass": "primary", "type": "sys_http_method", "sort": 10, "status": 1 },
                { "id": 10, "value": "2", "label": "POST", "listClass": "primary", "type": "sys_http_method", "sort": 10, "status": 1 },
                { "id": 11, "value": "3", "label": "PUT", "listClass": "primary", "type": "sys_http_method", "sort": 10, "status": 1 },
                { "id": 12, "value": "4", "label": "DELETE", "listClass": "primary", "type": "sys_http_method", "sort": 10, "status": 1 }
            ]
        })
        Mock.mock('/api/dictDatas?type=sys_yes_no', {
            msg: 'success',
            data: [
                { "id": 3, "value": "1", "label": "是", "listClass": "primary", "type": "sys_yes_no", "sort": 10, "status": 1 },
                { "id": 4, "value": "2", "label": "否", "listClass": "primary", "type": "sys_yes_no", "sort": 10, "status": 1 }
            ]
        })
        Mock.mock('/api/dictDatas?type=sys_menu_type', {
            msg: 'success',
            data: [
                { "id": 5, "value": "1", "label": "菜单", "listClass": "primary", "type": "sys_menu_type", "sort": 10, "status": 1 },
                { "id": 6, "value": "2", "label": "页面", "listClass": "danger", "type": "sys_menu_type", "sort": 10, "status": 1 },
                { "id": 7, "value": "3", "label": "按钮", "listClass": "success", "type": "sys_menu_type", "sort": 10, "status": 1 },
                { "id": 8, "value": "4", "label": "接口", "listClass": "warning", "type": "sys_menu_type", "sort": 10, "status": 1 }
            ]
        })

        Mock.mock(/api\/dictTypes/, {
            msg: 'success',
            data: [
                { "name": "显示隐藏", "type": "sys_show_hide" },
                { "name": "是否", "type": "sys_yes_no" },
                { "name": "菜单类型", "type": "sys_menu_type" },
                { "name": "请求类型", "type": "sys_http_method" }
            ]
        })

        Mock.mock(/api\/dicts/, {
            msg: 'success',
            data: [
                { "id": 1, "name": "显示隐藏", "type": "sys_show_hide", "status": 1 },
                { "id": 2, "name": "是否", "type": "sys_yes_no", "status": 1 },
                { "id": 4, "name": "菜单类型", "type": "sys_menu_type", "status": 1 },
                { "id": 5, "name": "请求类型", "type": "sys_http_method", "status": 1 }
            ],
            meta: { "total": 4 }
        })
    }
}
