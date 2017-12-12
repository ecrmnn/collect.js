'use strict';

module.exports = (it, expect, collect) => {
  it('should return the last item from the collection', () => {
    const collection = collect([1, 2, 3, 4]);
    const last = collection.last();
    expect(last).to.eql(4);
    expect(collection.all()).to.eql([1, 2, 3, 4]);
  });

  it('should work with array of objects', () => {
    const collection = collect([{ a: 'a' }, { b: 'b' }]);
    const last = collection.last();
    expect(last).to.eql({ b: 'b' });
    expect(collection.all()).to.eql([{ a: 'a' }, { b: 'b' }]);
  });

  it('should when the collection is an object', () => {
    const collection = collect({
      name: 'Sadio Mané',
      club: 'Liverpool FC',
    });

    expect(collection.last()).to.eql('Liverpool FC');
  });

  it('should accept custom callback', () => {
    const collection = collect([1, 2, 3]);
    const last = collection.last(item => item > 1);
    expect(last).to.eql(3);
    expect(collection.all()).to.eql([1, 2, 3]);
  });
};
