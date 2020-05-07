import store from '@/store'

const checkBtnPermission = (value) => {
    const auth = store.state.auth //权限
    const btnPerms = auth.permissions.btnPermissions
    let result = false
    if (btnPerms && btnPerms instanceof Array && btnPerms.length > 0) {
        result = btnPerms.some((item) => {
            return value === item
        })
    }
    return result
}

const permission = {
    inserted: function (el, binding) {
        const result = checkBtnPermission(binding.value)
        if (!result) {
            el.parentNode.removeChild(el)
        }
    }
}

export default permission