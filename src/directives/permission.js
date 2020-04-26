import permissions from '@/permissions'

const checkBtnPermission = (value) => {
    const btnPerms = permissions.state.btnPermissions
    const loginId = permissions.info.id
    let result = false
    if (loginId === 1) {
        result = true
    } else {
        if (btnPerms && btnPerms instanceof Array && btnPerms.length > 0) {
            result = btnPerms.some((item) => {
                return value === item
            })
        }
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