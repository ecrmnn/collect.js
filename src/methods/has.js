'use strict';

const variadic = require('../helpers/variadic');

module.exports = function has(...args) {
  const properties = variadic(args);

  return properties.every(key => Object.hasOwnProperty.call(this.items, key));
};
