'use strict';

module.exports = function empty(val) {
  if (val === null || val === undefined) {
    return true;
  }

  if (Array.isArray(val)) {
    return val.length === 0;
  }

  return Object.keys(val).length === 0;
};
