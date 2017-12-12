'use strict';

module.exports = (it, expect, collect) => {
  it('should return true if the collection is not empty; otherwise, false is returned', () => {
    expect(collect().isNotEmpty()).to.eql(false);
    expect(collect([]).isNotEmpty()).to.eql(false);
    expect(collect([1]).isNotEmpty()).to.eql(true);
  });
};
