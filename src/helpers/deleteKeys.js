'use strict';

const variadic = require('./variadic');

/**
 * Delete keys helper
 *
 * Delete one or multiple keys from an object
 *
 * @param obj
 * @param keys
 * @returns {void}
 */
module.exports = function deleteKeys(obj, ...keys) {
  variadic(keys).forEach((key) => {
    // eslint-disable-next-line
    delete obj[key];
  });
};
