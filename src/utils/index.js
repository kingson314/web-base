/**
 * @author paddy (patricknieh@hotmail.com)
 */
const react = {
  HelloWorld: require('../comps/HelloWorld'),
}

const utils = {
  react,
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
