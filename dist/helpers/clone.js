'use strict';

/**
 * Clone helper
 *
 * Clone an array or object
 *
 * @param items
 * @returns {*}
 */

module.exports = function clone(items) {
  var cloned = void 0;
  if (Array.isArray(items)) {
    cloned = [];
    items.forEach(function (value) {
      if (value !== Object(value)) {
        cloned.push(value);
      } else {
        cloned.push(clone(value));
      }
    });
  } else {
    cloned = {};
    Object.keys(items).forEach(function (prop) {
      if (items[prop] instanceof Object) {
        cloned[prop] = clone(items[prop]);
      } else {
        cloned[prop] = items[prop];
      }
    });
  }

  return cloned;
};