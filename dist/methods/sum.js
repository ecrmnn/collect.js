'use strict';

var values = require('../helpers/values');

var _require = require('../helpers/is'),
    isFunction = _require.isFunction;

var LocalDecimal = require('../helpers/localDecimal');

module.exports = function sum(key) {
  var items = values(this.items);

  var t = new LocalDecimal(0);

  if (key === undefined) {
    for (var i = 0, length = items.length; i < length; i += 1) {
      t = t.add(new LocalDecimal(items[i]));
    }
  } else if (isFunction(key)) {
    for (var _i = 0, _length = items.length; _i < _length; _i += 1) {
      t = t.add(new LocalDecimal(key(items[_i])));
    }
  } else {
    for (var _i2 = 0, _length2 = items.length; _i2 < _length2; _i2 += 1) {
      t = t.add(new LocalDecimal(items[_i2][key]));
    }
  }

  var total = t.toNumber();

  return parseFloat(total.toPrecision(12));
};