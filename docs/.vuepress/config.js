module.exports = {
    title: 'dog-vuejs',
    description: 'record tips of dog-vuejs',
    base: '/',
    dest: '/dist/',
    themeConfig: {
        nav: [
            { text: '文档', link: '/active' },
            { text: '源码', link: 'https://google.com' },
            { text: 'Github', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '项目',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/introduction',
                ]
            },
            {
                title: 'vue 进阶',   // 必要的
                path: '/active',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/active',
                    '/vuex',
                    '/router',
                    '/plugin',
                    '/directive',
                    '/mixin',
                    '/filter',
                    '/icon'
                ]
            },
            {
                title: '其他',   // 必要的
                path: '/others',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/others',
                    '/other-projects'
                ]
            }
        ]

    }
}