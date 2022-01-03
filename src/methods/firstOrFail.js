'use strict';

const operatorForWhere = require('../helpers/operatorForWhere');

module.exports = function firstOrFail(key, operator = null, value = null) {
  const filter = arguments.length > 1
    ? operatorForWhere(...arguments)
    : key;

  return this.first(filter, () => {
    throw new Error('Item not found.');
  });
};
