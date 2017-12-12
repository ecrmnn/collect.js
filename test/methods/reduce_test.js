'use strict';

module.exports = (it, expect, collect) => {
  it('should reduce the collection to a single value', () => {
    const collection = collect([1, 2, 3, 4, 5, 6, 7]);
    const total = collection.reduce((carry, item) => carry + item);

    expect(total).to.eql(28);
  });

  it('should accept a default carry as the second argument', () => {
    const collection = collect([1, 2, 3, 4, 5, 6, 7]);
    const total = collection.reduce((carry, item) => carry + item, 4);

    expect(total).to.eql(32);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5, 6, 7]);
  });
};
