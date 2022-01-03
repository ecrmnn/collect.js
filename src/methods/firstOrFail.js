'use strict';

const operatorForWhere = require('../helpers/operatorForWhere');

module.exports = function firstOrFail(key, ...operatorAndValue) {
  let filter = null;

  if (arguments.length > 1) {
    filter = operatorForWhere(key, ...operatorAndValue);
  } else {
    filter = key;
  }

  return this.first(filter, () => {
    throw new Error('Item not found.');
  });
};
