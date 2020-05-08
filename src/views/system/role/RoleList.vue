<template>
    <div class="system-role">
        <el-form
            ref="searchForm"
            :inline="true"
            :model="searchForm"
            class="search-form"
            size="medium"
        >
            <el-form-item
                label="角色名称"
                prop="name"
            >
                <el-input
                    v-model="searchForm.name"
                    placeholder="角色名称"
                />
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
                <!-- <el-button type="primary" icon="el-icon-plus" size="medium" @click="add">新增</el-button> -->
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
                    prop="name"
                    label="角色名称"
                    min-width="200"
                />
       
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="success"
                            @click="relateUser(scope.row.id, scope.row.name)"
                        >
                            分配用户
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import initData from '@/mixins/initData'

export default {
    dicts: ['sys_show_hide'],
    mixins: [initData],
    data() {
        return {
            searchForm: {
                name: '',
            }
        }
    },
    created() {
        this.$nextTick(() => {
            this.init()
        })
        this.selectDictType()
    },
    methods: {
        beforeInit() {
            this.url = '/roles'
            if (this.searchForm.name) {
                this.params['name'] = this.searchForm.name
            }
            return true
        },
        edit(data) {
            this.isAdd = false
            const _that = this.$refs.formRef
            _that.form = { ...data }
            _that.isDialog = true
        },
        add() {
            this.isAdd = true
            const _that = this.$refs.formRef
            _that.isDialog = true
        },
        relateUser(id, name) {
            this.$router.push({ path: `role/relatedUser/${id}` })
        }
    }
}
</script>

<style lang="scss">
.system-role {
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