'use strict';

module.exports = (it, expect, collect) => {
  it('should return a new collection with the specified number of items', () => {
    const collection = collect([0, 1, 2, 3, 4, 5]);
    const chunk = collection.take(3);

    expect(chunk.all()).to.eql([0, 1, 2]);
    expect(collection.all()).to.eql([0, 1, 2, 3, 4, 5]);
  });

  it('should take from the end of the collection when passed a negative integer', () => {
    const collection = collect([0, 1, 2, 3, 4, 5]);
    const chunk = collection.take(-2);

    expect(chunk.all()).to.eql([4, 5]);
    expect(collection.all()).to.eql([0, 1, 2, 3, 4, 5]);
  });

  it('should work when the collection is based on an object', () => {
    const collection = collect({
      name: 'Sadio Mané',
      number: 19,
      club: 'Liverpool FC',
    });

    const chunk = collection.take(1);
    expect(chunk.all()).to.eql({ name: 'Sadio Mané' });

    const chunk2 = collection.take(-1);
    expect(chunk2.all()).to.eql({ club: 'Liverpool FC' });

    expect(collection.all()).to.eql({
      name: 'Sadio Mané',
      number: 19,
      club: 'Liverpool FC',
    });
  });
};
