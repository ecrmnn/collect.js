'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function min(key) {
  if (key !== undefined) {
    return Math.min.apply(Math, _toConsumableArray(this.pluck(key).all()));
  }

  return Math.min.apply(Math, _toConsumableArray(this.items));
};