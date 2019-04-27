const {utils} = require('./index')

let date1 = '2019-1-1'
let date2 = '2019-1-2'

let res = utils.date.betweenHour(date1,date2)
console.log('res %o', res)
