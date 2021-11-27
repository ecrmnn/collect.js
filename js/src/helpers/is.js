'use strict';

module.exports = {
  /**
   * @returns {boolean}
   */
  isArray: item => Array.isArray(item),

  /**
   * @returns {boolean}
   */
  isObject: item => typeof item === 'object' && Array.isArray(item) === false && item !== null,

  /**
   * @returns {boolean}
   */
  isFunction: item => typeof item === 'function',
};
