'use strict';

const when = require('./when');

module.exports = function unless(value, fn, defaultFn) {
  return when.call(this, !value, fn, defaultFn);
};
