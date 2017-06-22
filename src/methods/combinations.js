'use strict';

var isArray = function(o) { return (o instanceof Array) || (Object.prototype.toString.apply(o) === "[object Array]"); },
  combinations = function(arr) {
    var n = arr.length,
      results = [],
      subfunc = function(copies, prefix) {
          //console.log('subfunc: ', copies)
        var i, myCopy = [], exprLen, currentChar = "", result = "";
        // if no prefix, set default to empty string
        if (typeof prefix === "undefined") {
          prefix = "";
        }
        // no copies, nothing to do... return
        if (!isArray(copies) || typeof copies[0] === "undefined") {
          return;
        }
        // remove first element from "copies" and store in "myCopy"
        myCopy = copies.splice(0, 1)[0];
        // store the number of characters to loop through
        exprLen = myCopy.length;
        for (i = 0; i < exprLen; i += 1) {
          currentChar = myCopy[i];
          result = prefix + currentChar;
          // if resulting string length is the number of characters of original string,
          // we have a result
          if (result.length === n) {
            results.push(result);
          }
          // if there are copies left,
          // pass remaining copies (by value) and result (as new prefix)
          // into subfunc (recursively)
          if (typeof copies[0] !== "undefined") {
            subfunc(copies.slice(0), result);
          }
        }
      };
    //
    subfunc(arr.slice().map(function(item) { return arr; }));
    return results.map(function(item) { return item.split('') });
};

module.exports = function() {
  return combinations(this.items);
};
