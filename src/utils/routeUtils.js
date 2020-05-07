/**
 * https://github.com/sunlandong/dynamicRouter/blob/master/src/utils/MenuUtils.js
 *
 * sunlandong
 */
import TheDefault from '@/layout/TheDefault'

// 把字符串转化成懒加载方法
function lazyLoading(name) {
  return () => import(`@/views/${name}.vue`)
}

// 递归生成菜单
function generateMenu(routes, data) {
  data.forEach((item) => {
    const menu = { meta: { icon: 'menu' } }
    menu.path = item.path
    menu.type = item.type
    if (item.type === 1) {
      menu.component = TheDefault
    } else if (item.filePath) {
      menu.component = lazyLoading(item.filePath)
    }

    if (item.icon) {
      menu.meta.icon = item.icon
    }
    if (item.name) {
      menu.meta.title = item.name
    }
    if (item.hidden) {
      menu.hidden = item.hidden
    }

    if (item.children) {
      menu.children = []
      generateMenu(menu.children, item.children)
    }
    routes.push(menu)
  })
}

export default generateMenu
