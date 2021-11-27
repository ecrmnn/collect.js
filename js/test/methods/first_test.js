'use strict';

module.exports = (it, expect, collect) => {
  it('should return the first item from the collection', () => {
    const collection = collect([1, 2, 3, 4]);
    const first = collection.first();

    expect(first).to.eql(1);
    expect(collection.all()).to.eql([1, 2, 3, 4]);
  });

  it('should also work with an array of objects', () => {
    const collection = collect([{ a: 'a' }, { b: 'b' }]);
    const first = collection.first();

    expect(first).to.eql({ a: 'a' });
    expect(collection.all()).to.eql([{ a: 'a' }, { b: 'b' }]);
  });

  it('should when the collection is an object', () => {
    const collection = collect({
      name: 'Sadio Mané',
      club: 'Liverpool FC',
    });

    expect(collection.first()).to.eql('Sadio Mané');
  });

  it('should accept a callback', () => {
    const collection = collect([1, 2, 3]);
    const first = collection.first(item => item > 1);

    expect(first).to.eql(2);
    expect(collection.all()).to.eql([1, 2, 3]);
  });

  it('should accept a default value', () => {
    const collection = collect([4, 3, 2, 1]);
    const first = collection.first(item => item >= 5, 5);

    expect(first).to.eql(5);
    expect(collection.all()).to.eql([4, 3, 2, 1]);
  });

  it('should accept a callback as the default value', () => {
    const collection = collect([4, 3, 2, 1]);
    const first = collection.first(item => item >= 6, () => 6);

    expect(first).to.eql(6);
    expect(collection.all()).to.eql([4, 3, 2, 1]);
  });

  it('should return the default value if there are no items', () => {
    const collectionArray = collect([]);
    let firstWithEmpty = collectionArray.first(null, 'Empty');
    let firstWithCallback = collectionArray.first(item => item >= 5, 'EmptyCallback');
    expect(firstWithEmpty).to.eql('Empty');
    expect(firstWithCallback).to.eql('EmptyCallback');
    expect(collectionArray.all()).to.eql([]);


    const collectionObject = collect({});
    firstWithEmpty = collectionObject.first(null, 'EmptyObject');
    firstWithCallback = collectionObject.first(item => item >= 5, 'EmptyObjectCallback');
    expect(firstWithEmpty).to.eql('EmptyObject');
    expect(firstWithCallback).to.eql('EmptyObjectCallback');
    expect(collectionObject.all()).to.eql({});
  });
};
