'use strict';

const variadic = require('../helpers/variadic');

module.exports = function hasAny(...args) {
  const properties = variadic(args);

  return properties.some(key => Object.hasOwnProperty.call(this.items, key));
};
