'use strict';

const empty = require('../../dist/helpers/empty.js');

module.exports = (it, expect, collect) => {
  it('should return true if the array has no items', () => {
    expect(empty([])).to.eql(true);
    expect(empty([1])).to.eql(false);
  });

  it('should return true if the object has no items', () => {
    expect(empty({})).to.eql(true);
    expect(empty({'Joe': 'doe'})).to.eql(false);
  });
};
