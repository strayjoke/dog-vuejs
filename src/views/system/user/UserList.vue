<template>
    <div class="user-list">
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
                    prop="loginName"
                    label="登录名称"
                    min-width="200"
                />
                <el-table-column
                    prop="name"
                    label="姓名"
                    min-width="200"
                />
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            v-if="showEditBtn"
                            size="mini"
                            type="success"
                            @click="editUser(scope.row)"
                        >
                            编辑
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block-pagination">
                <el-pagination
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
                    :current-page="page"
                    @size-change="sizeChange"
                    @current-change="pageChange"
                />
            </div>
        </div>
    </div>
</template>

<script>
import initData from '@/mixins/initData'
export default {
    dicts: ['sys_normal_disable'],
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
            this.url = '/sysUsers'
            this.params = {
                page: this.page,
                size: this.size
            }
            if (this.searchForm.name) {
                this.params['name'] = this.searchForm.name
            }
            return true
        }
    }
}
</script>

<style lang="scss">
.user-list {
    padding: 10px 15px;
    margin-bottom: 50px;
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
    .block-pagination {
        padding: 20px 0 15px;
    }
}
</style>

<style lang="scss">
.reset-dialog {
    height: 450px;
    .el-dialog__header {
        border-bottom: 1px solid #ddd;
        background: #f8f8f8;
    }
    .el-dialog__body {
        height: calc(100% - 115px);
        overflow: auto;
    }
    .el-dialog__footer {
        border-top: 1px solid #ddd;
        background: #f8f8f8;
        padding: 10px;
    }
}
</style>

