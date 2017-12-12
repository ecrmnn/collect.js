'use strict';

const values = require('../helpers/values');

module.exports = function every(fn) {
  const items = values(this.items);

  return items
    .map((item, index) => fn(item, index))
    .indexOf(false) === -1;
};
