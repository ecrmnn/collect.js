'use strict';

const values = require('../helpers/values');
const { isFunction } = require('../helpers/is');
const Decimal = require('decimal.js');

module.exports = function sum(key) {
  const items = values(this.items);

  let total = 0;
  let t = new Decimal(0);

  if (key === undefined) {
    for (let i = 0, { length } = items; i < length; i += 1) {
      t = t.add(new Decimal(items[i]))
    }
  } else if (isFunction(key)) {
    for (let i = 0, { length } = items; i < length; i += 1) {
      t = t.add(new Decimal(key(items[i])))
    }
  } else {
    for (let i = 0, { length } = items; i < length; i += 1) {
      t = t.add(new Decimal(items[i][key]))
    }
  }

  total = t.toNumber()
  return parseFloat(total.toPrecision(12));
};
