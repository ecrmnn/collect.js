'use strict';

module.exports = (it, expect, collect) => {
  it('should throw an error when item is not found', () => {
    expect(() => {
      collect().firstOrFail()
    }).to.throw('Item not found.');
  });

  it('should return the first element when item is found', () => {
    expect(collect([1, 2, 3, 4]).firstOrFail()).to.equal(1);
  });

  it('should accept a callback', () => {
    const collection = collect([1, 2, 3, 4]);

    expect(
      collection.firstOrFail(item => item === 4)
    ).to.equal(4);
  });

  it('should return element when there is only one in the collection', () => {
    const collection = collect([1]);

    expect(collection.sole()).to.equal(1);
  });

  it('should return element when one element remains in the collection', () => {
    const collection = collect([1, 2, 3, 4]).filter(item => item === 4);

    expect(collection.sole()).to.equal(4);
  })
};
