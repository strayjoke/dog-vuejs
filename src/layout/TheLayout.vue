<template>
    <el-container class="layout">
        <the-aside />
        <el-container
            direction="vertical"
            class="content"
        >
            <the-header />
            <the-main />
            <the-footer />
        </el-container>
    </el-container>
</template>

<script>
import TheHeader from './components/TheHeader'
import TheAside from './components/TheAside'
import TheMain from './components/TheMain'
import TheFooter from './components/TheFooter'

export default {
    components: {
        TheHeader,
        TheAside,
        TheMain,
        TheFooter
    }
}
</script>

<style lang='scss'>
.layout {
    width: 100%;
    height: 100%;

    .content {
        overflow: hidden;
    }
}
</style>