
'use strict';

/**
 *
 * @param {number} v
 * @returns {LocalDecimal}
 * @constructor
 */

var LocalDecimal = function LocalDecimal(v) {
  this.value = 0;
  this.exp = 0;
  this.expLength = 0;

  var parts = v.toString().split('.');
  this.value = parseInt(parts[0], 10);
  if (parts.length === 2) {
    var neg = 1;
    if (this.value < 0) {
      neg = -1;
    }
    this.exp = parseInt(parts[1], 10) * neg;
    this.expLength = parts[1].length;
  }

  /**
     *
     * @param {LocalDecimal} ldb
     */
  this.add = function (ldb) {
    if (!(ldb instanceof LocalDecimal)) {
      throw Error('LocalDecimalError: ' + ldb.toString() + ' is not a LocalDecimal instance!');
    }
    var ldr = new LocalDecimal(0);
    // the integer part
    ldr.value = this.value + ldb.value;
    // the decimal part
    var maxExpLength = this.expLength;
    if (maxExpLength < ldb.expLength) {
      maxExpLength = ldb.expLength;
    }
    ldr.expLength = maxExpLength;

    var ldaExp = this.exp;
    if (this.expLength < maxExpLength) {
      ldaExp = Math.pow(10, maxExpLength - this.expLength) * this.exp;
    }
    var ldbExp = ldb.exp;
    if (ldb.expLength < maxExpLength) {
      ldbExp = Math.pow(10, maxExpLength - ldb.expLength) * ldb.exp;
    }
    var ldrExp = ldaExp + ldbExp;
    var carryPoint = Math.pow(10, maxExpLength + 1);
    if (ldrExp >= carryPoint) {
      ldr.value += 1;
      ldrExp -= carryPoint;
    }
    ldr.exp = ldrExp;

    return ldr;
  };

  this.toNumber = function () {
    return this.value + this.exp / Math.pow(10, this.expLength);
  };

  return this;
};

module.exports = LocalDecimal;