'use strict';

var values = require('../helpers/values');

var _require = require('../helpers/is'),
    isFunction = _require.isFunction;

var Decimal = require('decimal.js');

module.exports = function sum(key) {
  var items = values(this.items);

  var total = 0;
  var t = new Decimal(0);

  if (key === undefined) {
    for (var i = 0, length = items.length; i < length; i += 1) {
      //total += parseFloat(items[i]);
      t = t.add(new Decimal(items[i]));
    }
  } else if (isFunction(key)) {
    for (var _i = 0, _length = items.length; _i < _length; _i += 1) {
      //total += parseFloat(key(items[i]));
      t = t.add(new Decimal(key(items[_i])));
    }
  } else {
    for (var _i2 = 0, _length2 = items.length; _i2 < _length2; _i2 += 1) {
      //total += parseFloat(items[i][key]);
      t = t.add(new Decimal(items[_i2][key]));
    }
  }

  total = t.toNumber();
  return parseFloat(total.toPrecision(12));
};