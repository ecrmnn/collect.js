'use strict';

module.exports = (it, expect, collect) => {
  it('should return a collection of collections', () => {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.split(2)).to.eql(collect([
      collect([1, 2, 3]),
      collect([4, 5]),
    ]));
  });

  it('should split a collection into the given number of collections', () => {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.split(2).all()).to.eql([
      collect([1, 2, 3]),
      collect([4, 5]),
    ]);
  });
};
