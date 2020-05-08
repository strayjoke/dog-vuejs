<template>
    <div>
        <el-dialog
            :title="title"
            :visible.sync="isDialog"
            center
            :close-on-click-modal="false"
            :before-close="cancel"
            width="700px"
        >
            <el-form
                ref="form"
                :model="form"
                label-width="85px"
                :rules="rules"
            >
                <el-form-item
                    label="上级菜单"
                    prop="parentName"
                >
                    <input
                        :value="form.pid"
                        type="hidden"
                    >
                    <el-input
                        v-model="form.parentName"
                        :disabled="isDisabled"
                        style="width:400px;"
                        @focus="showMenu"
                    >
                        <el-button
                            slot="append"
                            icon="el-icon-search"
                        />
                    </el-input>
                </el-form-item>
                <el-form-item
                    label="菜单类型"
                    prop="type"
                >
                    <el-radio
                        v-for="item in dictData.sys_menu_type"
                        :key="item.value"
                        v-model="form.type"
                        :label="item.value"
                    >
                        {{ item.label }}
                    </el-radio>
                </el-form-item>
                <el-form-item
                    label="菜单名称"
                    prop="name"
                >
                    <el-input
                        v-model.trim="form.name"
                        style="width:400px;"
                    />
                </el-form-item>
                <el-form-item
                    label="显示排序"
                    prop="orderNum"
                >
                    <el-input-number
                        v-model.number="form.orderNum"
                        :min="0"
                        :max="500"
                    />
                </el-form-item>
                <el-form-item
                    v-if="showMethod"
                    label="http 方法"
                    prop="method"
                >
                    <el-select
                        v-model="form.method"
                        placeholder="请选择"
                    >
                        <el-option
                            v-for="item in dictData.sys_http_method"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item
                    v-if="showPath"
                    label="请求地址"
                    prop="path"
                >
                    <el-input v-model="form.path" />
                </el-form-item>
                <el-form-item
                    v-if="showPerms"
                    label="组件/标识"
                    prop="filePath"
                >
                    <el-input v-model="form.filePath" />
                </el-form-item>
                <el-form-item
                    v-if="showIcon"
                    label="图标"
                    prop="icon"
                >
                    <el-popover
                        trigger="click"
                        placement="bottom-start"
                        width="400"
                    >
                        <icons @selected="selectIcon" />
                        <el-input
                            slot="reference"
                            v-model="form.icon"
                            style="width:400px;"
                            placeholder="点击选择图标"
                            readonly
                        >
                            <icon-svg
                                slot="prefix"
                                :icon-class="form.icon"
                            />
                        </el-input>
                    </el-popover>
                </el-form-item>
                <el-form-item
                    label="菜单状态"
                    prop="hidden"
                >
                    <el-radio-group v-model="form.hidden">
                        <el-radio-button
                            v-for="item in dictData.sys_show_hide"
                            :key="item.value"
                            v-model="form.hidden"
                            :label="item.value"
                        >
                            {{ item.label }}
                        </el-radio-button>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span
                slot="footer"
                class="dialog-footer"
            >
                <el-button>取 消</el-button>
                <el-button
                    type="primary"
                    disabled
                    @click="submit"
                >确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Icons from '@/components/menu-icons'
export default {
    components: {
        Icons
    },
    props: {
        isAdd: {
            type: Boolean,
            required: true
        },
        dictData: {
            type: Object,
            required: true
        },
        data: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isDialog: false,
            isDisabled: false,
            isLoading: false,
            form: {
                name: '',
                orderNum: 0,
                path: '',
                perms: '',
                icon: '',
                type: '',
                hidden: 0,
                method: '1',
                pid: 0,
                parentName: '主目录'
            },
            rules: {
                name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
                path: [{ required: true, message: '请输入请求地址', trigger: 'blur' }],
                perms: [{ required: true, message: '请输入组件/标识', trigger: 'blur' }]
            }
        }
    },
    computed: {
        title() {
            return this.isAdd ? '新增菜单' : '编辑菜单'
        },
        showPath() {
            return this.form.type === 2 || this.form.type === 4
        },
        showPerms() {
            return this.form.type === 2 || this.form.type === 3
        },
        showIcon() {
            return this.form.type === 1 || this.form.type === 2
        },
        showMethod() {
            return this.form.type === 4
        },
    },
    watch: {
        'form.type': function () {
            this.$refs['form'].clearValidate()
        }
    },
    methods: {
        cancel() {
            this.resetForm()
        },
        selectIcon(val) {
            this.form.icon = val
        },
        resetForm() {
            this.isDialog = false
            this.$refs['form'].resetFields()
            this.form = {
                name: '',
                orderNum: 0,
                path: '',
                perms: '',
                icon: '',
                type: '',
                hidden: 0,
                pid: 0,
                parentName: '主目录'
            }
        }
    }
}
</script>

<style>
</style>