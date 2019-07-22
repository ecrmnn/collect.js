'use strict';

module.exports = (it, expect, collect) => {
  it('should return the object values from the collection', () => {
    const collection = collect({
      a: 'xoxo',
      b: 'abab',
      c: '1337',
      1337: 12,
    });

    const values = collection.values();

    expect(values.all()).to.eql([12, 'xoxo', 'abab', '1337']);
    expect(collection.all()).to.eql({
      a: 'xoxo', b: 'abab', c: '1337', 1337: 12,
    });
  });

  it('should not be recursive', () => {
    const data = {
      1: {
        id: 1,
        name: 'A New Hope',
        director: {
          name: 'George Lucas',
        },
      },
      2: {
        id: 2,
        name: 'Attack of the Clones',
        director: {
          name: 'George Lucas',
        },
      },
    };

    expect(collect(data).values().all()).to.eql([
      {
        id: 1,
        name: 'A New Hope',
        director: {
          name: 'George Lucas',
        },
      },
      {
        id: 2,
        name: 'Attack of the Clones',
        director: {
          name: 'George Lucas',
        },
      },
    ]);
  });
};
