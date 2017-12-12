'use strict';

module.exports = (it, expect, collect) => {
  it('should return the minimum value in the collection', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const min = collection.min();

    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);
    expect(min).to.eql(1);
  });

  it('should work with negative values', () => {
    const collection = collect([1, 2, 3, 4, 5, -5, -4, -3, -2 - 1]);
    const min = collection.min();

    expect(collection.all()).to.eql([1, 2, 3, 4, 5, -5, -4, -3, -2 - 1]);
    expect(min).to.eql(-5);
  });

  it('should return the minimum value of a given key', () => {
    const data = [{
      worth: 100,
    }, {
      worth: 900,
    }, {
      worth: 79,
    }];

    const collection = collect(data);
    const minKey = collection.min('worth');
    expect(minKey).to.eql(79);
    expect(collection.all()).to.eql(data);
  });
};
