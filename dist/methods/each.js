'use strict';

module.exports = function each(fn) {
  var _this = this;

  var stop = false;

  if (Array.isArray(this.items)) {
    this.items.forEach(function (item, key, array) {
      if (!stop) {
        var output = fn(item, key, array);

        if (output === false) {
          stop = true;
        }
      }
    });
  } else {
    Object.keys(this.items).forEach(function (key) {
      if (!stop) {
        var output = fn(_this.items[key], key, _this.items);

        if (output === false) {
          stop = true;
        }
      }
    });
  }

  return this;
};