import Auth from './auth.js'
import Menu from './menu.js'
import User from './user.js'
import Role from './role.js'
import Dict from './dict.js'

export default {
    mockData() {
        Auth.mockData()
        Menu.mockData()
        User.mockData()
        Role.mockData()
        Dict.mockData()
    }
}
