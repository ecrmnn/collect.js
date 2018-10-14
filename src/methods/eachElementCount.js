'use strict';

module.exports = function eachElementCount() {
  let elementCount = {};
  let itemsArray = this.items;
  itemsArray.forEach(function (element) {
    let count = 0;
    itemsArray.forEach(function (ele) {
      if((typeof (ele) === 'object') && (typeof (element) === 'object')){
          JSON.stringify(ele) === JSON.stringify(element) && (count+=1);
      }else {
        ele === element && (count+=1);
      }
    });
    (typeof (element) === 'object') ? elementCount[JSON.stringify(element)] = count : elementCount[element] = count;
  });

  return elementCount;
};
