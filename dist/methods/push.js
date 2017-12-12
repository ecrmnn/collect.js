'use strict';

module.exports = function push() {
  var _items;

  (_items = this.items).push.apply(_items, arguments);

  return this;
};