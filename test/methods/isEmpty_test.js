'use strict';

module.exports = (it, expect, collect) => {
  it('should return true if collection is empty', () => {
    expect(collect([]).isEmpty()).to.eql(true);
    expect(collect([1, 2, 3]).isEmpty()).to.eql(false);
  });

  it('should also work if the collection is an empty string', () => {
    expect(collect('').isEmpty()).to.eql(true);
    expect(collect('xo').isEmpty()).to.eql(false);
  });
};
