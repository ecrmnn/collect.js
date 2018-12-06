'use strict';

module.exports = function whenNotEmpty(fn, defaultFn) {
  if (Array.isArray(this.items) && this.items.length) {
    return fn(this);
  } else if (Object.keys(this.items).length) {
    return fn(this);
  }

  if (defaultFn !== undefined) {
    if (Array.isArray(this.items) && !this.items.length) {
      return defaultFn(this);
    } else if (!Object.keys(this.items).length) {
      return defaultFn(this);
    }
  }

  return this;
};
