'use strict';

/**
 * Get value of a nested property
 *
 * @param mainObject
 * @param key
 * @returns {*}
 */
module.exports = function nestedValue(mainObject, key) {
  try {
    return key.split('.').reduce((obj, property) => obj[property], mainObject);
  } catch (err) {
    // If we end up here, we're not working with an object, and @var mainObject is the value itself
    return mainObject;
  }
};
