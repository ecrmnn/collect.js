'use strict';

const values = require('../helpers/values');

module.exports = function contains(key, value) {
  if (value !== undefined) {
    if (Array.isArray(this.items)) {
      return this.items
        .filter(items => items[key] !== undefined && items[key] === value)
        .length > 0;
    }

    return this.items[key] !== undefined && this.items[key] === value;
  }

  if (typeof key === 'function') {
    return (this.items.filter((item, index) => key(item, index)).length > 0);
  }

  if (Array.isArray(this.items)) {
    return this.items.indexOf(key) !== -1;
  }

  const keysAndValues = values(this.items);
  keysAndValues.push(...Object.keys(this.items));

  return keysAndValues.indexOf(key) !== -1;
};
