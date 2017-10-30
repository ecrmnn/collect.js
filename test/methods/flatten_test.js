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
};
