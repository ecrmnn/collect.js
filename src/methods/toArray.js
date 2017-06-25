'use strict';

module.exports = function toArray() {
  if (Array.isArray(this.items)) {
    return this.all();
  }

  return this.values().all();
};
