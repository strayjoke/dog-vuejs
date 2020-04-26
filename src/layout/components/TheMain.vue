<template>
    <el-main class="main">
        <tags-view />
        <div class="container">
            <transition
                name="fade-transform"
                mode="out-in"
            >
                <router-view />
            </transition>
        </div>
    </el-main>
</template>

<script>
import TagsView from './TagsView'
export default {
    components: {
        TagsView
    }
}
</script>

<style lang="scss">
.main {
    height: calc(100% - 30px);
    position: relative;
    transition: width 0.3s ease-in-out;
    padding: 0;

    .container {
        height: calc(100% - 30px);
        overflow: hidden;
    }
}
</style>