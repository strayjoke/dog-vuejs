<template>
    <div class="the-default">
        <transition
            name="fade-transform"
            mode="out-in"
        >
            <router-view />
        </transition>
    </div>
</template>

<style lang="scss">
.the-default {
    overflow: hidden;
    height: 100%;
}
</style>