<template>
    <div class="relate-user">
        <el-form
            ref="searchForm"
            :inline="true"
            :model="searchForm"
            class="search-form"
            size="medium"
        >
            <el-form-item
                label="姓名"
                prop="name"
            >
                <el-input v-model="searchForm.name" />
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    size="medium"
                    round
                    icon="el-icon-search"
                    disabled
                    @click="queryData"
                >
                    查询
                </el-button>
            </el-form-item>
            <el-form-item>
                <el-button
                    type="warning"
                    size="medium"
                    round
                    icon="el-icon-refresh"
                    @click="initQuery"
                >
                    重置
                </el-button>
            </el-form-item>
        </el-form>
        <div class="table-container">
            <div class="btn-dom">
                <el-button
                    type="primary"
                    icon="el-icon-plus"
                    size="medium"
                    disabled
                    @click="add"
                >
                    分配用户
                </el-button>
            </div>
            <el-table
                :data="data"
                class="tree-table"
                :header-cell-style="{background:'#EFF3F8'}"
                style="width:100%"
                fit
                highlight-current-row
            >
                <el-table-column
                    prop="loginName"
                    label="登录名称"
                    min-width="100"
                />
                <el-table-column
                    prop="name"
                    label="姓名"
                    min-width="100"
                />
            </el-table>
        </div>
    </div>
</template>

<script>
import initData from '@/mixins/initData'

export default {
    mixins: [initData],
    data() {
        return {
            searchForm: {
                name: '',
            },
        }
    },
    created() {
        this.$nextTick(() => {
            this.init()
        })
    },
    methods: {
        beforeInit() {
            this.url = '/getRelatedSysUsers'
            this.params = {
                page: this.page,
                size: this.size
            }
            if (this.searchForm.name) {
                this.params['name'] = this.searchForm.name
            }
            return true
        },
        add() {
            this.isAdd = true
            const _that = this.$refs.formRef
            _that.isDialog = true
            _that.init()
        }
    }
}
</script>

<style lang="scss">
.relate-user {
    padding: 10px 15px;
    background-color: #f3f3f4;
    height: 100%;
    overflow: auto;

    .search-form {
        background-color: #fff;
        padding: 10px;
        border-radius: 6px;
    }
    .table-container {
        margin: 10px auto;
        background-color: #fff;
        padding: 10px;
        border-radius: 6px;

        .btn-dom {
            padding-bottom: 10px;
        }
    }
}
</style>