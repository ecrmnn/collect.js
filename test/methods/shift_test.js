'use strict';

module.exports = (it, expect, collect) => {
  it('should return the first item and remove it from the collection', () => {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.shift()).to.eql(1);
    expect(collection.all()).to.eql([2, 3, 4, 5]);
  });

  it('should also work when the collection is based on an object', () => {
    const collection = collect({
      name: 'Mohamed Salah',
      number: 11,
    });

    expect(collection.shift()).to.eql('Mohamed Salah');
    expect(collection.all()).to.eql({ number: 11 });
  });

  it('should modify the collection, unlike first()', () => {
    const shiftCollection = collect({
      name: 'Mohamed Salah',
      number: 11,
    });

    const firstCollection = collect({
      name: 'Mohamed Salah',
      number: 11,
    });

    const shifted = shiftCollection.shift();
    const first = firstCollection.first();

    expect(shifted).to.eql(first);
    expect(shifted).to.eql('Mohamed Salah');

    expect(shiftCollection).to.not.eql(firstCollection);
    expect(shiftCollection.all()).to.eql({ number: 11 });
    expect(firstCollection.all()).to.eql({
      name: 'Mohamed Salah',
      number: 11,
    });
  });
};
