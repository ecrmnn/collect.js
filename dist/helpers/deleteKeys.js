"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = deleteKeys;

var _variadic = _interopRequireDefault(require("./variadic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Delete keys helper
 *
 * Delete one or multiple keys from an object
 *
 * @param obj
 * @param keys
 * @returns {void}
 */
function deleteKeys(obj) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  (0, _variadic["default"])(keys).forEach(function (key) {
    // eslint-disable-next-line
    delete obj[key];
  });
}