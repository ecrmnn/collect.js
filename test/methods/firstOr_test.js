'use strict';

module.exports = (it, expect, collect) => {
  it('should return the first value', () => {
    const collection = collect([1]);

    expect(collection.firstOr()).to.eq(1);
  })

  it('should return null with no default value', () => {
    const collection = collect();

    expect(collection.firstOr()).to.eq(null);
  });

  it('should return the default value', () => {
    const collection = collect();
    const first = collection.firstOr('foo');

    expect(first).to.eq('foo');
  });

  it('should return the callback value', () => {
    const collection = collect();
    const first = collection.firstOr(() => 'foo');

    expect(first).to.eql('foo');
  });
};
