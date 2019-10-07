'use strict';

module.exports.toJson = function () {
  if (typeof this.items === 'object' && !Array.isArray(this.items)) {
    return JSON.stringify(this.all());
  }

  return JSON.stringify(this.toArray());
};

module.exports.toJSON = function () {
  return this.items;
};
