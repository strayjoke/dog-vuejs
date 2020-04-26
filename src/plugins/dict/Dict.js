import Vue from 'vue'
import { selectDictDataByType } from '@/api/dict'

export default class Dict {
    constructor(dict) {
        this.dict = dict
    }

    async init(items, callback) {
        if (items === undefined || items === null) {
            return false
        }

        items.forEach(item => {
            Vue.set(this.dict, item, [])
            selectDictDataByType(item).then(res => {
                this.dict[item] = res.data
            })
        })

        callback()
    }
}