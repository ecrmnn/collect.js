'use strict';

module.exports = function when(value, fn, defaultFn) {
  if (value) {
    return fn(this, value);
  } else if (defaultFn) {
    return defaultFn(this, value);
  }

  return this;
};