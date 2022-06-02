'use strict';

module.exports = function each(fn) {
  var stop = false;

  if (Array.isArray(this.items)) {
    var length = this.items.length;

    for (var index = 0; index < length && !stop; index += 1) {
      stop = fn(this.items[index], index, this.items) === false;
    }
  } else {
    var keys = Object.keys(this.items);
    var _length = keys.length;

    for (var _index = 0; _index < _length && !stop; _index += 1) {
      var key = keys[_index];
      stop = fn(this.items[key], key, this.items) === false;
    }
  }

  return this;
};