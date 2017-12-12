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
    expect(collection.all()).to.eql({ a: 'xoxo', b: 'abab', c: '1337', 1337: 12 });
  });
};
