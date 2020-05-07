<template>
    <div class="icons-wrapper">
        <el-input
            v-model="name"
            style="position:relative"
            clearable
            placeholder="请输入图标名称"
            prefix-icon="el-icon-search"
            @clear="filterIcons"
            @input.native="filterIcons"
        />
        <el-row class="icon-list">
            <el-col
                v-for="(item, index) in icons"
                :key="index"
                :span="8"
            >
                <div
                    class="icon-item"
                    @click="selectName(item)"
                >
                    <icon-svg :icon-class="item" />
                    <span class="icon-name">{{ item }}</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import icons from "./requireIcons"
export default {
    data() {
        return {
            name: '',
            icons: icons
        }
    },
    methods: {
        filterIcons() {
            if (this.name) {
                this.icons = this.icons.filter(item => item.includes(this.name))
            } else {
                this.icons = icons
            }
        },
        selectName(name) {
            this.$emit('selected', name)
            document.body.click()
        }
    }
}
</script>

<style lang="scss">
.icons-wrapper {
    width: 100%;
    padding: 10px;

    .icon-list {
        height: 200px;
        overflow-y: hidden;

        .icon-item {
            margin: 5px;
            height: 35px;
            text-align: center;
            float: left;
            font-size: 32px;
            cursor: pointer;

            .icon-name {
                font-size: 16px;
            }
        }
    }
}
</style>