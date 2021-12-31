'use strict';

module.exports = (it, expect, collect) => {
  it('should throw an error when item is not found', () => {
    expect(() => {
      collect().sole()
    }).to.throw('Item not found.');
  });

  it('should throw an error when more than one item is found', () => {
    expect(() => {
      collect([1, 2, 3, 4]).sole()
    }).to.throw('Multiple items found.');
  });

  it('should throw an error when more than one item is found with callback', () => {
    const collection = collect([1, 2, 3, 4]);

    expect(() => {
      collection.sole(item => [3, 4].includes(item));
    }).to.throw('Multiple items found.');
  });

  it('should accept a callback', () => {
    const collection = collect([1, 2, 3, 4]);

    expect(
      collection.sole(item => item === 4)
    ).to.equal(4);
  });
};
