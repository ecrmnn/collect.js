'use strict';

module.exports = (it, expect, collect) => {
  it('should map into a dictionary', () => {
    const collection = collect([
      { id: 1, name: 'a' },
      { id: 2, name: 'b' },
      { id: 3, name: 'c' },
      { id: 4, name: 'b' },
    ]);

    const groups = collection.mapToDictionary(item => [item.name, item.id]);

    expect(groups.all()).to.eql({
      a: [1],
      b: [2, 4],
      c: [3],
    });
  });

  it('should work plain array', () => {
    const collection = collect([1, 2, 3, 2, 1]);

    const groups = collection.mapToDictionary((item, key) => [item, key]);

    expect(groups.all()).to.eql({
      1: [0, 4],
      2: [1, 3],
      3: [2],
    });
  });
};
