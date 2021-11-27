'use strict';

module.exports = (it, expect, collect) => {
  it('should skip n number of items', () => {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.skip(4).all()).to.eql([5]);
  });

  it('should skip n number of items when object', () => {
    const collection = collect({
      first: 'first',
      second: 'second',
      third: 'third',
      fourth: 'fourth',
      fifth: 'fifth',
    });

    expect(collection.skip(4).all()).to.eql({
      fifth: 'fifth',
    });
  });
};
