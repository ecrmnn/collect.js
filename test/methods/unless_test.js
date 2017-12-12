'use strict';

module.exports = (it, expect, collect) => {
  it('should execute the given callback when the first argument given to the method evaluates to false', () => {
    const collection = collect([1, 2, 3]);

    collection.unless(false, (c) => {
      c.push(4);
    });

    expect(collection.all()).to.eql([1, 2, 3, 4]);

    collection.unless(true, (c) => {
      c.push(5);
    }, (c) => {
      c.push(6);
    });

    expect(collection.all()).to.eql([1, 2, 3, 4, 6]);
  });
};
