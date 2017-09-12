'use strict';

module.exports = function variadic(args) {
  if (Array.isArray(args[0])) {
    return args[0];
  }

  return args;
};