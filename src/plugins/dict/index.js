import Vue from 'vue'
import Dict from './Dict'

const install = function (Vue) {
    Vue.mixin({
        data() {
            if (this.$options.dicts instanceof Array) {
                return {
                    dictData: {}
                }
            }
            return {}
        },
        created() {
            if (this.$options.dicts instanceof Array) {
                new Dict(this.dictData).init(this.$options.dicts, () => { })
            }
        }
    })
}

const dict = { install }

Vue.use(dict)