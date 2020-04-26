import { initData } from '@/api/initData'

export default {
    data() {
        return {
            data: [],
            page: 1,
            size: 10,
            total: 0,
            url: '',
            params: {},
            isAdd: false
        }
    },
    methods: {
        beforeInit() {
            return true
        },
        init() {
            if (!this.beforeInit()) {
                return
            }
            initData(this.url, this.params).then(res => {
                this.data = res.data
                if (res.meta && res.meta.total) {
                    this.total = res.meta.total
                }
            })
        },
        pateChange(e) {
            this.page = e
            this.init()
        },
        sizeChange(e) {
            this.page = 1
            this.size = e
            this.init()
        },
        delChange(size) {
            if (size === undefined) {
                size = 1
            }
            if (this.page > 1 && this.data.length === size) {
                this.page = this.page - 1
            }
        },
        queryData() {
            this.page = 1
            this.init()
        },
        initQuery() {
            this.$refs['searchForm'].resetFields()
            this.init()
        }
    }
}