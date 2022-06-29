/**
 * @returns {boolean}
 */
export const isArray = item => Array.isArray(item);

/**
 * @returns {boolean}
 */
export const isObject = item => typeof item === 'object' && Array.isArray(item) === false && item !== null;

/**
 * @returns {boolean}
 */
export const isFunction = item => typeof item === 'function';
