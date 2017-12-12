'use strict';

module.exports = (it, expect, collect) => {
  it('should return the mode value of collection values', () => {
    const collection = collect([10, 10, 20, 40]);
    expect(collection.mode()).to.eql([10]);
    expect(collection.all()).to.eql([10, 10, 20, 40]);

    expect(collect([1, 3, 3, 6, 7, 8, 9]).mode()).to.eql([3]);
  });

  it('should return null when getting the mode of an empty collection', () => {
    expect(collect([]).mode()).to.eql(null);
    expect(collect('').mode()).to.eql(null);
  });

  it('should return the mode value of collection values by key', () => {
    const collectionOfObjects = collect([
      { foo: 1 },
      { foo: 1 },
      { foo: 2 },
      { foo: 4 },
    ]);

    expect(collectionOfObjects.mode('foo')).to.eql([1]);

    const collectionOfObjects2 = collect([
      { foo: 1 },
      { foo: 3 },
      { foo: 3 },
      { foo: 6 },
      { foo: 7 },
      { foo: 8 },
      { foo: 9 },
    ]);

    expect(collectionOfObjects2.mode('foo')).to.eql([3]);
  });

  it('should return array with multiple values if necessary', () => {
    expect(collect([1, 2, 3]).mode()).to.eql([1, 2, 3]);
    expect(collect([1, 1, 2, 4, 4]).mode()).to.eql([1, 4]);

    const collectionOfObjects3 = collect([
      { foo: 1 },
      { foo: 3 },
      { foo: 3 },
      { foo: 6 },
      { foo: 6 },
    ]);

    expect(collectionOfObjects3.mode('foo')).to.eql([3, 6]);

    expect(collect([1, 1, 2, 4, 4]).mode()).to.eql([1, 4]);
  });
};
