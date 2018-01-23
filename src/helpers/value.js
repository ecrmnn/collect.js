'use strict';

/**
 * Value helper
 *
 * Retrieve the value
 *
 * @param args
 * @returns {*}
 */
module.exports = function value(val) {
  if (typeof val === 'function') {
    return val();
  }

  return val;
};
