'use strict';
module.exports = function eachElementCount(array) {
  var elementCount = {};
  var array = this.items;
  array.forEach(function (element) {
    var count = 0;
    array.forEach(function (ele) {
      ele === element && (count+=1);
    });
    (typeof (element) === 'object') ? elementCount[JSON.stringify(element)] = count : elementCount[element] = count;
  });

  return elementCount;
};
