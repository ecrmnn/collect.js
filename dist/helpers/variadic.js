"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = variadic;

/**
 * Variadic helper function
 *
 * @param args
 * @returns {Array}
 */
function variadic(args) {
  if (Array.isArray(args[0])) {
    return args[0];
  }

  return args;
}