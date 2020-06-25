'use strict';

const values = require('../helpers/values');
const { isFunction } = require('../helpers/is');
const LocalDecimal = require('../helpers/localDecimal');

module.exports = function sum(key) {
  const items = values(this.items);

  let t = new LocalDecimal(0);

  if (key === undefined) {
    for (let i = 0, { length } = items; i < length; i += 1) {
      t = t.add(new LocalDecimal(items[i]));
    }
  } else if (isFunction(key)) {
    for (let i = 0, { length } = items; i < length; i += 1) {
      t = t.add(new LocalDecimal(key(items[i])));
    }
  } else {
    for (let i = 0, { length } = items; i < length; i += 1) {
      t = t.add(new LocalDecimal(items[i][key]));
    }
  }

  const total = t.toNumber();

  return parseFloat(total.toPrecision(12));
};
