'use strict';

/**
 * Variadic helper function
 *
 * @param args
 * @returns {*}
 */
module.exports = function variadic(args) {
  if (Array.isArray(args[0])) {
    return args[0];
  }

  return args;
};
