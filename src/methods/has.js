'use strict';

module.exports = function has(key) {
  if (Array.isArray(this.items)) {
    return (
      this.items.filter(function(item) {
        return item.hasOwnProperty(key);
      }).length > 0
    );
  }

  return this.items.hasOwnProperty(key);
};
