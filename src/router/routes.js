import TheLayout from '@/layout/TheLayout'
import Dashboard from '@/views/Dashboard'

const routes = [
    {
        path: '',
        redirect: '/dashboard',
        hidden: true
    },
    {
        path: '/',
        component: TheLayout,
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: Dashboard,
                meta: { title: '工作台' }
            },
            {
                path: '401',
                name: '401',
                component: () => import('@/views/error/401'),
                meta: { title: '401' },
                hidden: true
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/TheLogin'),
        hidden: true
    }
]


export default routes