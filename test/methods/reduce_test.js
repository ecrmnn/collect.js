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

  it('should support hashmaps', () => {
    const collection = collect({ Joe: 'Doe', Foo: 'Bar' });
    const reduced = collection.reduce((carry, item, key) => carry + item + key, '');

    expect(reduced).to.eql('DoeJoeBarFoo');
    expect(collection.all()).to.eql({ Joe: 'Doe', Foo: 'Bar' });
  });

  it('should return 0 when reducing an empty collection', () => {
    const collection = collect([]);
    const result = collection.reduce((carry, number) => carry + number, 0);

    expect(result).to.eql(0);
  });

  it('should return 1 when reducing an empty collection with carry of 1', () => {
    const collection = collect([]);
    const result = collection.reduce((carry, number) => carry + number, 1);

    expect(result).to.eql(1);
  });
};
