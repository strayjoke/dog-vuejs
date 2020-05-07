<template>
    <div class="page-login">
        <div class="login">
            <p class="title">
                后台管理系统
            </p>
            <el-form
                ref="form"
                :model="form"
                :rules="rules"
                class="content"
            >
                <el-form-item prop="name">
                    <el-input
                        v-model.trim="form.name"
                        placeholder="用户名"
                    />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model.trim="form.password"
                        placeholder="密码"
                        type="password"
                    />
                </el-form-item>
                <div class="login-btn">
                    <el-button
                        type="primary"
                        :loading="isLoading"
                        @click="login('form')"
                    >
                        登录
                    </el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import MD5 from 'js-md5'

export default {
    data() {
        return {
            form: {
                name: 'admin',
                password: '123456'
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            },
            isLoading: false
        }
    },
    methods: {
        login(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    this.isLoading = true
                    this.$store.dispatch('login', {
                        name: this.form.name,
                        password: MD5(this.form.password)
                    })
                        .then(() => {
                            this.isLoading = false
                            this.$router.push('/')
                        })
                        .catch(() => {
                            this.isLoading = false
                        })
                } else {
                    return false
                }
            })
        }
    }
}
</script>

<style lang="scss">
.page-login {
    position: relative;
    width: 100%;
    height: 100%;

    .title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: #409eff;
    }
    .login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -250px 0 0 -175px;
        border-radius: 5px;
        background: rgba(221, 221, 221, 0.3);
        overflow: hidden;
    }
    .content {
        padding: 30px 30px;
    }
    .login-btn {
        text-align: center;
    }
    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }
}
</style>
