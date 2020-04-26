<template>
    <el-header class="header">
        <div
            class="aside-collapse"
            @click="toggleClick"
        >
            <icon-svg
                icon-class="collapse"
                :class="{active:isCollapse}"
            />
        </div>
        <bread-crumb class="breadcrumb-container" />

        <div class="right-menu">
            <screen-full class="right-menu-item" />
        </div>
    </el-header>
</template>

<script>
import BreadCrumb from '@/components/header/BreadCrumb'
import ScreenFull from '@/components/header/ScreenFull'

export default {
    components: {
        BreadCrumb,
        ScreenFull,
    },
    computed: {
        isCollapse() {
            return this.$store.state.common.isCollapseNav
        }
    },
    methods: {
        toggleClick() {
            this.$store.commit('SET_IS_COLLAPSE_NAV', !this.isCollapse)
        },

    }
}
</script>

<style lang="scss">
.header {
    background-color: #242f42;
    padding: 0;
    line-height: 60px;
    user-select: none;

    .aside-collapse {
        font-size: 24px;
        cursor: pointer;
        padding: 0 20px;
        display: inline-block;
        float: left;

        &:hover {
            background-color: #242f22;
        }

        .active {
            transform: rotate(180deg);
        }
    }

    .breadcrumb-container {
        display: inline-block;
        line-height: 60px;
    }

    .right-menu {
        float: right;
        line-height: 60px;
        height: 100%;
        color: #fff;
        margin-right: 20px;
        font-size: 20px;

        &:focus {
            outline: none;
        }

        .right-menu-item {
            display: inline-block;
            padding: 0 10px;
            height: 100%;
            vertical-align: middle;
            cursor: pointer;
        }
    }
}
</style>

