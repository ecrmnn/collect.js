'use strict';

module.exports = (it, expect, collect) => {
  it('should map over and modify the collection', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const multiplied = collection.map(item => item * 2);

    expect(multiplied.all()).to.eql([2, 4, 6, 8, 10]);
    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);

    const collection2 = collect([1, 2, 3, 4, 5]);
    const multiplied2 = collection2.map((item, key) => key * 2);

    expect(multiplied2.all()).to.eql([0, 2, 4, 6, 8]);
    expect(collection2.all()).to.eql([1, 2, 3, 4, 5]);
  });

  it('should map over an object and modify the values', () => {
    const collection = collect({
      foo: 1,
      bar: 2,
      baz: 3,
    });

    const multiplied = collection.map(item => item * 2);

    expect(multiplied.all()).to.eql({
      foo: 2,
      bar: 4,
      baz: 6,
    });

    expect(collection.all()).to.eql({
      foo: 1,
      bar: 2,
      baz: 3,
    });
  });
};
