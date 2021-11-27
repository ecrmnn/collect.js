'use strict';

module.exports = (it, expect, collect) => {
  it('should flatten a multi-dimensional object', () => {
    const data = {
      name: 'Daniel',
      languages: ['JavaScript', 'PHP', 'Go'],
    };

    const collection = collect(data);

    const flatten = collection.flatten();

    expect(flatten.all()).to.eql(['Daniel', 'JavaScript', 'PHP', 'Go']);
  });

  it('should flatten nested arrays and objects', () => {
    const data2 = {
      Apple: [
        { name: 'iPhone 6S', brand: 'Apple' },
      ],
      Samsung: [
        { name: 'Galaxy S7', brand: 'Samsung' },
      ],
    };

    const collection2 = collect(data2);

    const flattened2 = collection2.flatten(1);

    expect(flattened2.all()).to.eql([
      { name: 'iPhone 6S', brand: 'Apple' },
      { name: 'Galaxy S7', brand: 'Samsung' },
    ]);

    const flattened3 = collect(data2).flatten();
    expect(flattened3.all()).to.eql(['iPhone 6S', 'Apple', 'Galaxy S7', 'Samsung']);
  });

  it('should flatten null', () => {
    const data = [null];
    const flattened = collect(data).flatten();
    expect(flattened.all()).to.eql([null]);

    const data2 = { name: null };
    const flattened2 = collect(data2).flatten();
    expect(flattened2.all()).to.eql([null]);
  });

  it('should flatten undefined', () => {
    const data = [undefined];
    const flattened = collect(data).flatten();
    expect(flattened.all()).to.eql([undefined]);

    const data2 = { name: undefined };
    const flattened2 = collect(data2).flatten();
    expect(flattened2.all()).to.eql([undefined]);
  });

  it('should not throw exceptions when encountering null', () => {
    const data = {
      Apple: [
        { name: null, brand: 'Apple' },
      ],
      Samsung: [
        { name: 'Galaxy S7', brand: 'Samsung' },
      ],
    };

    const flattened = collect(data).flatten();
    expect(flattened.all()).to.eql([null, 'Apple', 'Galaxy S7', 'Samsung']);
  });

  // https://github.com/ecrmnn/collect.js/issues/240
  it('should flatten an object with objects', () => {
    const collection = collect({
      k: { a: [2, 3, 4] },
      b: { a: [5, 6, 7] },
      t: { a: [8, 9, 0] },
    });

    expect(collection.flatten(2).all()).to.eql([
      2, 3, 4, 5, 6, 7, 8, 9, 0,
    ]);
  });
};
