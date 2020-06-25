
'use strict';

/**
 *
 * @param {number} v
 * @returns {LocalDecimal}
 * @constructor
 */
const LocalDecimal = function (v) {
  this.value = 0;
  this.exp = 0;
  this.expLength = 0;

  const parts = v.toString().split('.');
  this.value = parseInt(parts[0], 10);
  if (parts.length === 2) {
    let neg = 1;
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
      throw Error(`LocalDecimalError: ${ldb.toString()} is not a LocalDecimal instance!`);
    }
    const ldr = new LocalDecimal(0);
    // the integer part
    ldr.value = this.value + ldb.value;
    // the decimal part
    let maxExpLength = this.expLength;
    if (maxExpLength < ldb.expLength) {
      maxExpLength = ldb.expLength;
    }
    ldr.expLength = maxExpLength;

    let ldaExp = this.exp;
    if (this.expLength < maxExpLength) {
      ldaExp = (10 ** (maxExpLength - this.expLength)) * this.exp;
    }
    let ldbExp = ldb.exp;
    if (ldb.expLength < maxExpLength) {
      ldbExp = (10 ** (maxExpLength - ldb.expLength)) * ldb.exp;
    }
    let ldrExp = ldaExp + ldbExp;
    const carryPoint = 10 ** (maxExpLength + 1);
    if (ldrExp >= carryPoint) {
      ldr.value += 1;
      ldrExp -= carryPoint;
    }
    ldr.exp = ldrExp;

    return ldr;
  };

  this.toNumber = function () {
    return this.value + this.exp / (10 ** this.expLength);
  };

  return this;
};

module.exports = LocalDecimal;
