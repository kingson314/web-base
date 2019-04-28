const moment = require('moment')
const numeral = require('numeral')
const math = require('mathjs')
const anime = require('animejs/lib/anime.js')
const d3 = require('d3')
const $ = require("jquery")
const _ = require("lodash")

const Sortable = require('sortablejs')
const Mock = require('mockjs')
const Konva = require('konva')

// const react = {
//   HelloWorld: require('../comps/HelloWorld'),
// }

/**
 * @author paddy (patricknieh@hotmail.com)
 * @copyright paddy 2019
 * Released under the MIT license
 */

const utils = {
  moment,
  numeral,
  math,
  anime,
  d3,
  $,
  _,

  Sortable,
  Mock,
  Konva,

  check: require('./check'),

  array: require('./array'),
  number: require('./number'),
  string: require('./string'),
  date: require('./date'),

  event: require('./event'),
  file: require('./file'),
  net: require('./net'),
  xlsx: require('./xlsx'),
}

module.exports = utils
