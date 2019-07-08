'use strict';

const values = require('../helpers/values');

module.exports = function sum(key) {
  const items = values(this.items);

  let total = 0;

  if (key === undefined) {
    for (let i = 0, { length } = items; i < length; i += 1) {
      total += items[i];
    }
  } else if (typeof key === 'function') {
    for (let i = 0, { length } = items; i < length; i += 1) {
      total += key(items[i]);
    }
  } else {
    for (let i = 0, { length } = items; i < length; i += 1) {
      total += items[i][key];
    }
  }

  return total;
};
