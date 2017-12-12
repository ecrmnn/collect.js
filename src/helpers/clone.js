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

    cloned.push(...items);
  } else {
    cloned = {};

    Object.keys(items).forEach((prop) => {
      cloned[prop] = items[prop];
    });
  }

  return cloned;
};
