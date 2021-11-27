'use strict';

module.exports = (it, expect, collect) => {
  const collection = collect(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);

  it('should create a new collection consisting of every n-th element', () => {
    const nth4 = collection.nth(4);
    expect(nth4.all()).to.eql(['a', 'e', 'i']);
  });

  it('should return all items when receiving 1 as the first argument', () => {
    const nth1 = collection.nth(1);
    expect(nth1.all()).to.eql(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
  });

  it('should accept offset as the second argument', () => {
    const nth4offset1 = collection.nth(4, 1);
    expect(nth4offset1.all()).to.eql(['b', 'f']);

    const nth4offset3 = collection.nth(4, 3);
    expect(nth4offset3.all()).to.eql(['d', 'h']);
  });

  it('should work when the collection is based on an object', () => {
    const collection2 = collect({
      a: 'b',
      c: 'd',
      e: 'f',
    });

    const nth = collection2.nth(1);
    expect(nth.all()).to.eql(['b', 'd', 'f']);
  });
};
