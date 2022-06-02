'use strict';

var variadic = require('./variadic');
/**
 * Delete keys helper
 *
 * Delete one or multiple keys from an object
 *
 * @param obj
 * @param keys
 * @returns {void}
 */


module.exports = function deleteKeys(obj) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  variadic(keys).forEach(function (key) {
    // eslint-disable-next-line
    delete obj[key];
  });
};