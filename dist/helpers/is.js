"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = exports.isFunction = exports.isArray = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * @returns {boolean}
 */
var isArray = function isArray(item) {
  return Array.isArray(item);
};
/**
 * @returns {boolean}
 */


exports.isArray = isArray;

var isObject = function isObject(item) {
  return _typeof(item) === 'object' && Array.isArray(item) === false && item !== null;
};
/**
 * @returns {boolean}
 */


exports.isObject = isObject;

var isFunction = function isFunction(item) {
  return typeof item === 'function';
};

exports.isFunction = isFunction;