'use strict';

module.exports = function unless(value, fn, defaultFn) {
  if (!value) {
    return fn(this, value);
  }

  if (defaultFn) {
    return defaultFn(this, value);
  }

  return this;
};
