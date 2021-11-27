'use strict';

module.exports = (it, expect, collect) => {
  it('should return all items, simple array', () => {
    expect(collect([1, 2, 3, 4, 5]).all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should recursively return all items', () => {
    const collectionOfCollections = collect([
      collect([1, 2, 3]),
      collect([4, 5, 6, collect([7, 8, 9]), [10, 11, 12]]),
    ]);

    expect(collectionOfCollections.all()).to.eql([
      collect([1, 2, 3]),
      collect([4, 5, 6, collect([7, 8, 9]), [10, 11, 12]]),
    ]);
  });

  it('should return all items when collection is an object', () => {
    const collection = collect({
      name: 'Sadio Mané',
    });

    expect(collection.all()).to.eql({
      name: 'Sadio Mané',
    });
  });

  it('should return all items when containing objects', () => {
    const collection = collect({
      name: {
        first: 'Sadio',
        last: 'Mané',
      },
    });

    expect(collection.all()).to.eql({
      name: {
        first: 'Sadio',
        last: 'Mané',
      },
    });
  });

  it('should return all items containing functions', () => {
    const collection = collect({
      fn: () => 2 + 2,
    });

    const all = collection.all();
    expect(all).to.have.property('fn');
    expect(all.fn).to.be.instanceOf(Function);
    expect(all.fn()).to.eql(4);
  });
};
