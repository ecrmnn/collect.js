'use strict';

module.exports = function duplicates() {
  const occuredValues = [];
  const duplicateValues = {};

  const stringifiedValue = (value) => {
    if (Array.isArray(value) || typeof value === 'object') {
      return JSON.stringify(value);
    }

    return value;
  };

  if (Array.isArray(this.items)) {
    this.items.forEach((value, index) => {
      const valueAsString = stringifiedValue(value);

      if (occuredValues.indexOf(valueAsString) === -1) {
        occuredValues.push(valueAsString);
      } else {
        duplicateValues[index] = value;
      }
    });
  } else if (typeof this.items === 'object') {
    Object.keys(this.items).forEach((key) => {
      const valueAsString = stringifiedValue(this.items[key]);

      if (occuredValues.indexOf(valueAsString) === -1) {
        occuredValues.push(valueAsString);
      } else {
        duplicateValues[key] = this.items[key];
      }
    });
  }

  return new this.constructor(duplicateValues);
};
