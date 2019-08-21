'use strict';

module.exports = {
  /**
   * @returns {boolean}
   */
  isArray: item => Array.isArray(item),

  /**
   * @returns {boolean}
   */
  isObject: item => typeof item === 'object' && item !== null,

  /**
   * @returns {boolean}
   */
  isFunction: item => typeof item === 'function',
};
