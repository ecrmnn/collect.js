'use strict';

module.exports = function toJson() {
  if (typeof this.items === 'object' && !Array.isArray(this.items)) {
    return JSON.stringify(this.all());
  }

  return JSON.stringify(this.toArray());
};
