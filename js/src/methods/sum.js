'use strict';

const values = require('../helpers/values');
const { isFunction } = require('../helpers/is');

module.exports = function sum(key) {
  const items = values(this.items);

  let total = 0;

  if (key === undefined) {
    for (let i = 0, { length } = items; i < length; i += 1) {
      total += parseFloat(items[i]);
    }
  } else if (isFunction(key)) {
    for (let i = 0, { length } = items; i < length; i += 1) {
      total += parseFloat(key(items[i]));
    }
  } else {
    for (let i = 0, { length } = items; i < length; i += 1) {
      total += parseFloat(items[i][key]);
    }
  }


  return parseFloat(total.toPrecision(12));
};
