"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = pluck;

var _is = require("../helpers/is");

var _nestedValue = _interopRequireDefault(require("../helpers/nestedValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var buildKeyPathMap = function buildKeyPathMap(items) {
  var keyPaths = {};
  items.forEach(function (item, index) {
    function buildKeyPath(val, keyPath) {
      if ((0, _is.isObject)(val)) {
        Object.keys(val).forEach(function (prop) {
          buildKeyPath(val[prop], "".concat(keyPath, ".").concat(prop));
        });
      } else if ((0, _is.isArray)(val)) {
        val.forEach(function (v, i) {
          buildKeyPath(v, "".concat(keyPath, ".").concat(i));
        });
      }

      keyPaths[keyPath] = val;
    }

    buildKeyPath(item, index);
  });
  return keyPaths;
};

function pluck(value, key) {
  if (value.indexOf('*') !== -1) {
    var keyPathMap = buildKeyPathMap(this.items);
    var keyMatches = [];

    if (key !== undefined) {
      var keyRegex = new RegExp("0.".concat(key), 'g');
      var keyNumberOfLevels = "0.".concat(key).split('.').length;
      Object.keys(keyPathMap).forEach(function (k) {
        var matchingKey = k.match(keyRegex);

        if (matchingKey) {
          var match = matchingKey[0];

          if (match.split('.').length === keyNumberOfLevels) {
            keyMatches.push(keyPathMap[match]);
          }
        }
      });
    }

    var valueMatches = [];
    var valueRegex = new RegExp("0.".concat(value), 'g');
    var valueNumberOfLevels = "0.".concat(value).split('.').length;
    Object.keys(keyPathMap).forEach(function (k) {
      var matchingValue = k.match(valueRegex);

      if (matchingValue) {
        var match = matchingValue[0];

        if (match.split('.').length === valueNumberOfLevels) {
          valueMatches.push(keyPathMap[match]);
        }
      }
    });

    if (key !== undefined) {
      var collection = {};
      this.items.forEach(function (item, index) {
        collection[keyMatches[index] || ''] = valueMatches;
      });
      return new this.constructor(collection);
    }

    return new this.constructor([valueMatches]);
  }

  if (key !== undefined) {
    var _collection = {};
    this.items.forEach(function (item) {
      if ((0, _nestedValue["default"])(item, value) !== undefined) {
        _collection[item[key] || ''] = (0, _nestedValue["default"])(item, value);
      } else {
        _collection[item[key] || ''] = null;
      }
    });
    return new this.constructor(_collection);
  }

  return this.map(function (item) {
    if ((0, _nestedValue["default"])(item, value) !== undefined) {
      return (0, _nestedValue["default"])(item, value);
    }

    return null;
  });
}