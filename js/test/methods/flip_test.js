'use strict';

module.exports = (it, expect, collect) => {
  it('should return a collection with keys and values flipped', () => {
    const collection = collect({
      name: 'Steven Gerrard',
      number: 8,
    });
    const flip = collection.flip();

    expect(flip.all()).to.eql({
      'Steven Gerrard': 'name',
      8: 'number',
    });

    expect(collection.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8,
    });
  });

  it('should be able to flip an array based collection', () => {
    const collection = collect(['a', 'b', 'c']);
    const flip = collection.flip();

    expect(flip.all()).to.eql({
      a: 0,
      b: 1,
      c: 2,
    });

    expect(collection.all()).to.eql(['a', 'b', 'c']);
  });
};
