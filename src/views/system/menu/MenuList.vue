<template>
    <div class="system-menu">
        <el-form
            ref="searchForm"
            :inline="true"
            :model="searchForm"
            class="search-form"
        >
            <el-form-item
                label="菜单名称"
                prop="name"
            >
                <el-input v-model.trim="searchForm.name" />
            </el-form-item>
            <!-- 查询/重置按钮 -->
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
            <!-- 新增/折叠 -->
            <div class="btn-dom">
                <el-button
                    type="primary"
                    icon="el-icon-plus"
                    size="medium"
                    @click="add"
                >
                    新增
                </el-button>
                <el-button
                    type="info"
                    icon="el-icon-sort"
                    size="medium"
                    @click="collapseTable"
                >
                    展开/折叠
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
                    prop="name"
                    label="菜单名称"
                    min-width="300"
                >
                    <template slot-scope="scope">
                        {{ scope.row.name }}
                        <template v-for="item in dictData.sys_menu_type">
                            <el-tag
                                v-if="scope.row.type == item.value"
                                :key="item.value"
                                size="small"
                                :type="item.listClass"
                            >
                                {{ item.label }}
                            </el-tag>
                        </template>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="orderNum"
                    label="排序"
                    min-width="100"
                />
                <el-table-column
                    prop="path"
                    label="请求地址"
                    min-width="300"
                >
                    <template slot-scope="scope">
                        {{ scope.row.path }}
                        <template v-for="item in dictData.sys_http_method">
                            <el-tag
                                v-if="scope.row.method == item.value"
                                :key="item.value"
                                size="small"
                                :type="item.listClass"
                            >
                                {{ item.label }}
                            </el-tag>
                        </template>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="filePath"
                    label="组件/标识"
                    min-width="200"
                />
                <!-- <el-table-column label="操作" min-width="300">
          <template slot-scope="scope">
            <el-button  size="small" type="primary" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
          </template>
        </el-table-column> -->
            </el-table>
        </div>
    </div>
</template>

<script>
import initData from '@/mixins/initData'

export default {
    dicts: ['sys_show_hide', 'sys_menu_type', 'sys_http_method', 'sys_yes_no'],
    mixins: [initData],
    data() {
        return {
            defaultExpandAll: false,
            searchForm: {
                name: ''
            }
        }
    },
    watch: {
        defaultExpandAll: function (value) {
            this.$nextTick(() => {
                const els = document.getElementsByClassName('el-table__expand-icon')
                for (let i = 0; i < els.length; i++) {
                    if (value && els[i].className.indexOf('el-table__expand-icon--expanded') === -1) {
                        els[i].click()
                    } else if (!value && els[i].className.indexOf('el-table__expand-icon--expanded') > -1) {
                        els[i].click()
                    }
                }
            })
        }
    },
    created() {
        this.$nextTick(() => {
            console.log(1112)
            this.init()
        })
    },
    methods: {
        beforeInit() {
            this.url = '/menus'
            this.params = {}
            if (this.searchForm.name) {
                this.params['name'] = this.searchForm.name
            }
            return true
        },
        add(data = null, flagDisabled = false) {
            this.isAdd = true
            const _that = this.$refs.formRef
            _that.isDialog = true
            _that.isDisabled = flagDisabled
            if (flagDisabled) {
                _that.form.pid = data.id
                _that.form.parentName = data.name
            }
        },
        collapseTable() {
            this.defaultExpandAll = !this.defaultExpandAll
        }
    }
}

</script>

<style lang="scss">
.system-menu {
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
}
</style>

