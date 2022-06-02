'use strict';

module.exports = function push() {
  var _this$items;

  (_this$items = this.items).push.apply(_this$items, arguments);

  return this;
};