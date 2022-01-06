'use strict';

const operatorForWhere = require('../helpers/operatorForWhere');

module.exports = function sole(key = null, ...operatorAndValue) {
  let filter = null;

  if (arguments.length > 1) {
    filter = operatorForWhere(key, ...operatorAndValue);
  } else {
    filter = key;
  }

  const items = this.when(filter, (collection) => collection.filter(filter));

  if (items.isEmpty()) {
    throw new Error('Item not found.');
  }

  if (items.count() > 1) {
    throw new Error('Multiple items found.');
  }

  return items.first();
};
