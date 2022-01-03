'use strict';

const operatorForWhere = require('../helpers/operatorForWhere');

module.exports = function sole(key = null, operator = null, value = null) {
  const filter = arguments.length > 1
    ? operatorForWhere(...arguments)
    : key;

  const items = this.when(filter, (collection) => collection.filter(filter));

  if (items.isEmpty()) {
    throw new Error('Item not found.');
  }

  if (items.count() > 1) {
    throw new Error('Multiple items found.');
  }

  return items.first();
};
