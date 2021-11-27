'use strict';

module.exports = function mapInto(ClassName) {
  return this.map((value, key) => new ClassName(value, key));
};
