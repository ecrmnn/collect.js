'use strict';

module.exports = (it, expect, collect) => {
  it('should return the count of the each elements in the array', () => {
    expect(collect([1, 2, 3, 3]).eachElementCount()).to.eql({ 1: 1, 2: 1, 3: 2 });
  });
};
