'use strict';

const values = require('../helpers/values');

module.exports = function every(fn) {
  const items = values(this.items);

  return items.every(fn);
};
