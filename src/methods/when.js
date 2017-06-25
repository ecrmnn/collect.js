'use strict';

module.exports = function when(value, fn) {
  if (value) {
    fn(this);
  }
};
