'use strict';

module.exports = function eachElementCount(array) {
    var elementCount = {};
    array.forEach(function (element) {
        var count = 0;
        array.forEach(function (ele) {
            ele == element && count++;
        });
        (typeof(element) == 'object') ? elementCount[JSON.stringify(element)] = count : elementCount[element] = count;
    });
    return elementCount;
};
