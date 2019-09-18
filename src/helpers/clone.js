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
  let cloned;
  if (Array.isArray(items)) {
    cloned = [];
    items.forEach((value) => {
      if (value !== Object(value)) {
        cloned.push(value);
      } else {
        cloned.push(clone(value));
      }
    });
  } else {
    cloned = {};
    Object.keys(items).forEach((prop) => {
      if (items[prop] instanceof Object) {
        cloned[prop] = clone(items[prop]);
      } else {
        cloned[prop] = items[prop];
      }
    });
  }

  return cloned;
};
