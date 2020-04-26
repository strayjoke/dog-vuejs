import moment from 'moment'

export function formatTime(val, format = 'YYYY-MM-DD HH:mm') {
    if (val) {
        return moment(val).format(format)
    }
}