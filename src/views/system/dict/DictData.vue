<template>
    <div class="dict-list">
        <el-form
            ref="searchForm"
            :inline="true"
            :model="searchForm"
            class="search-form"
        >
            <el-form-item
                label="字典名称"
                prop="type"
            >
                <el-select v-model="searchForm.type">
                    <el-option
                        v-for="item in dictTypes"
                        :key="item.type"
                        :label="item.name"
                        :value="item.type"
                    />
                </el-select>
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
                    @click="add"
                >
                    新增
                </el-button>
            </div>
            <el-table
                :data="data"
                class="tree-table"
                :header-cell-style="{background:'#EFF3F8'}"
                style="width:100%"
                fit
                highlight-current-row
                row-key="id"
            >
                <el-table-column
                    prop="label"
                    label="字典标签"
                    min-width="150"
                />
                <el-table-column
                    prop="type"
                    label="字典类型"
                    min-width="150"
                />
                <el-table-column
                    prop="value"
                    label="字典键值"
                    min-width="150"
                />
                <el-table-column
                    label="状态"
                    prop="status"
                    width="100"
                >
                    <template slot-scope="scope">
                        <template v-for="item in dictData.sys_show_hide">
                            <el-tag
                                v-if="scope.row.status === item.value"
                                :key="item.value"
                                size="small"
                                :type="item.listClass"
                            >
                                {{ item.label }}
                            </el-tag>
                        </template>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="success"
                            @click="edit(scope.row)"
                        >
                            编辑
                        </el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="destory(scope.row.id)"
                        >
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import initData from '@/mixins/initData'
import { selectDictTypes } from '@/api/dict'

export default {
    dicts: ['sys_show_hide'],
    mixins: [initData],
    data() {
        return {
            searchForm: {
                type: this.$route.query.type,
            },
            dictTypes: []
        }
    },
    created() {
        this.$nextTick(() => {
            this.init()
        })
    },
    mounted() {
        this.selectDictType()
    },
    methods: {
        beforeInit() {
            this.url = '/dictDatas'
            this.params = {}
            if (this.searchForm.type) {
                this.params['type'] = this.searchForm.type
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
            _that.form.type = this.$route.query.type
        },
        selectDictType() {
            selectDictTypes({}).then(res => {
                this.dictTypes = res.data
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.dict-list {
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
    .block-pagination {
        padding: 20px 0 15px;
    }
}
</style>
