'use strict';

module.exports = function first(fn, defaultValue) {
  if (typeof fn === 'function') {
    for (let i = 0, length = this.items.length; i < length; i += 1) {
      const item = this.items[i];
      if (fn(item)) {
        return item;
      }
    }

    if (typeof defaultValue === 'function') {
      return defaultValue();
    }

    return defaultValue;
  }

  if ((Array.isArray(this.items) && this.items.length) || (Object.keys(this.items).length)) {
    if (Array.isArray(this.items)) {
      return this.items[0];
    }

    const firstKey = Object.keys(this.items)[0];

    return this.items[firstKey];
  }

  if (typeof defaultValue === 'function') {
    return defaultValue();
  }

  return defaultValue;
};
