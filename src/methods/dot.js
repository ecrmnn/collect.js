'use strict';

const { isObject } = require('../helpers/is');

module.exports = function dot() {
  if (!isObject(this.items)) {
    return this;
  }

  const sep = '.';
  const kv = {};

  const stringify = (obj, prev) => {
    const entries = Object.entries(obj);
    for (let i = 0; i < entries.length; i += 1) {
      const [k, v] = entries[i];
      let key = k;
      if (prev) {
        key = prev + sep + key;
      }

      if (isObject(v)) {
        stringify(v, key);
      } else {
        kv[key] = v;
      }
    }
  };

  stringify(this.items);

  return new this.constructor(kv);
};
