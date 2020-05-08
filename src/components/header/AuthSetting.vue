<template>
    <el-dropdown
        trigger="click"
        class="auth-settings"
        :hide-on-click="false"
        @command="handleCommand"
    >
        <div class="el-dropdown-link admin-avatar">
            <span class="admin-name">
                {{ name }}
                <i class="el-icon-caret-bottom el-icon-right" />
            </span>
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
                command="userInfo"
                disabled
            >
                个人信息
            </el-dropdown-item>
            <el-dropdown-item
                v-loading="isLoading"
                divided
                command="logout"
                element-loading-spinner="el-icon-loading"
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
            name: this.$store.state.auth.user.name,
            isLoading: false
        }
    },
    methods: {
        handleCommand(command) {
            switch (command) {
                case 'logout':
                    this.isLoading = true
                    this.$store.dispatch('logout').then(() => {
                        this.isLoading = false
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