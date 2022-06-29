"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = nestedValue;

/**
 * Get value of a nested property
 *
 * @param mainObject
 * @param key
 * @returns {*}
 */
function nestedValue(mainObject, key) {
  try {
    return key.split('.').reduce(function (obj, property) {
      return obj[property];
    }, mainObject);
  } catch (err) {
    // If we end up here, we're not working with an object, and @var mainObject is the value itself
    return mainObject;
  }
}