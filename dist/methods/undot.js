'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function undot() {
  var _this = this;

  if (Array.isArray(this.items)) {
    return this;
  }

  var collection = {};
  Object.keys(this.items).forEach(function (key) {
    if (key.indexOf('.') !== -1) {
      var obj = collection;
      key.split('.').reduce(function (acc, current, index, array) {
        if (!acc[current]) {
          acc[current] = {};
        }

        if (index === array.length - 1) {
          acc[current] = _this.items[key];
        }

        return acc[current];
      }, obj);
      collection = _objectSpread(_objectSpread({}, collection), obj);
    } else {
      collection[key] = _this.items[key];
    }
  });
  return new this.constructor(collection);
};