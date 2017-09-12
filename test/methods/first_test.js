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
};
