'use strict';

module.exports = (it, expect, collect) => {
  it('should return the count of the collection', () => {
    expect(collect([1, 2, 3, 4]).count()).to.eql(4);
    expect(collect([1, 2, 3, 4, 5]).count()).to.eql(5);
    expect(collect([1, 2, 3, 4, 5, 6]).count()).to.eql(6);
    expect(collect([1, 2, 3, 4, 5, 6, 7]).count()).to.eql(7);
  });
};
