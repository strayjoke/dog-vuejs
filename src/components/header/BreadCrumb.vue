<template>
    <el-breadcrumb
        separator="/"
        class="breadcrumb"
    >
        <transition-group name="fade">
            <el-breadcrumb-item
                v-for="(item, index) in menuList"
                :key="index"
            >
                {{ item.meta.title }}
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
export default {
    data() {
        return {
            menuList: []
        }
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    created() {
        this.getBreadcrumb()
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.meta.title)
            const first = matched[0]
            if (first && first.name !== 'dashboard') {
                matched = [{ path: '/dashboard', name: 'dashboard', meta: { title: '工作台' } }].concat(matched)
            }
            this.menuList = matched
        }
    }
}
</script>

<style lang="scss">
.el-breadcrumb__item:first-child {
    .el-breadcrumb__inner:first-child {
        color: $theme-color;
    }
}
.el-breadcrumb__item:last-child {
    .el-breadcrumb__inner:first-child {
        color: #fff;
    }
}
.breadcrumb {
    .el-breadcrumb__item {
        .el-breadcrumb__inner {
            color: #fff;
        }
    }
}
</style>

