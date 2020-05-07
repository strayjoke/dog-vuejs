<template>
    <el-dropdown
        trigger="click"
        class="auth-settings"
        @command="handleCommand"
    >
        <div class="el-dropdown-link admin-avatar">
            <span class="admin-name">
                {{ name }}
                <i class="el-icon-caret-bottom el-icon-right" />
            </span>
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userInfo">
                个人信息
            </el-dropdown-item>
            <el-dropdown-item
                divided
                command="logout"
            >
                退出
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
export default {
    data() {
        return {
            name: this.$store.state.auth.user.name
        }
    },
    methods: {
        handleCommand(command) {
            switch (command) {
                case 'logout':
                    this.$store.dispatch('logout').then(() => {
                        this.$router.push({ path: '/login' })
                    })
                    break
                default:
                    break
            }
        }
    }
}
</script>

<style lang="scss">
.auth-settings {
    .admin-name {
        color: #fff;
    }
}
</style>