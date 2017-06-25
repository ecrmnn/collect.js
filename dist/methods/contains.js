'use strict';

module.exports = function contains(key, value) {
  if (value !== undefined) {
    return this.items[key] !== undefined && this.items[key] === value;
  }

  if (typeof key === 'function') {
    return this.items.filter(function (item, index) {
      return key(item, index);
    }).length > 0;
  }

  if (Array.isArray(this.items)) {
    return this.items.indexOf(key) !== -1;
  }

  return this.items[key] !== undefined;
};