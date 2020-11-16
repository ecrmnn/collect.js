'use strict';

const variadic = require('../helpers/variadic');

module.exports = function has(...args) {
  const properties = variadic(args);

  return properties.filter(key => Object.keys(this.items).includes(key)).length
    === properties.length;
};
