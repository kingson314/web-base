// const utils = require('./index')
const arrayUtil = require('./index').array
const checkUtil = require('./index').check
const dateUtil = require('./index').date

let arr = ['paddy','patrick','somebody']
let num = 'string'
let date = new Date()

// console.log(utils.array.remove(arr,'somebody'))
// console.log(utils.check.isNumber(num))
// console.log(utils.date.format(date,'YYYY-MM-DD hh:mm'))

console.log(arrayUtil.remove(arr,'somebody'))
console.log(checkUtil.isNumber(num))
console.log(dateUtil.format(date,'YYYY-MM-DD hh:mm'))
