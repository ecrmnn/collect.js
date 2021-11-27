'use strict';

module.exports = (it, expect, collect) => {
  it('should return the modified collection', () => {
    const collection = collect([1, 2, 3, 4]);

    const transformed = collection
      .transform(i => i * 2)
      .transform(i => i * 2);

    expect(transformed).to.eql(collection);
    expect(transformed.all()).to.eql([4, 8, 12, 16]);
  });

  it('should iterate over the collection and transform it', () => {
    const collection = collect({
      foo: 1,
      bar: 2,
      baz: 3,
    });

    collection.transform(item => item * 2);

    expect(collection.all()).to.eql({
      foo: 2,
      bar: 4,
      baz: 6,
    });
  });

  it('should work exactly like map, but modify the collection', () => {
    const tCollection = collect([1, 2, 3]);
    const transformed = tCollection.transform(i => i * 5);

    expect(tCollection).to.eql(transformed);
    expect(tCollection.all()).to.eql([5, 10, 15]);
    expect(transformed.all()).to.eql([5, 10, 15]);

    const mCollection = collect([1, 2, 3]);
    const mapped = mCollection.map(i => i * 5);

    expect(mCollection).to.not.eql(mapped);
    expect(mCollection.all()).to.eql([1, 2, 3]);
    expect(mapped.all()).to.eql([5, 10, 15]);
  });
};
