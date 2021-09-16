'use strict';

module.exports = (it, expect, collect) => {
  it('should return the first item and remove it from the collection', () => {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.shift()).to.eql(1);
    expect(collection.all()).to.eql([2, 3, 4, 5]);
  });

  it('should return the first n item and remove it from the collection', () => {
    const collection = collect([1, 2, 3, 4, 5]);

    expect(collection.shift(2)).to.eql(collect([1, 2]));
    expect(collection.all()).to.eql([3, 4, 5]);
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

  it('should return the first n values when collection is based on an object', () => {
    const collection = collect({
      name: 'Mohamed Salah',
      club: 'Liverpool FC',
      country: 'Egypt',
    });

    expect(collection.shift(2)).to.eql(collect({
      name: 'Mohamed Salah',
      club: 'Liverpool FC',
    }));

    expect(collection.all()).to.eql({
      country: 'Egypt',
    });
  });

  it('should work with strings', () => {
    expect(collect('xoxo').shift()).to.eql('xoxo');
    expect(collect('xoxo').shift(20).first()).to.eql('xoxo');
  });

  it('should return null when shifting an empty collection', () => {
    expect(collect().shift()).to.eql(null);
    expect(collect([]).shift()).to.eql(null);
    expect(collect({}).shift()).to.eql(null);
  });
};
