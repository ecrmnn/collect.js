'use strict';

module.exports = (it, expect, collect) => {
  it('should return the modified collection', () => {
    const collection = collect([1, 2, 3, 4]);

    const transformed = collection
      .transform(i => i * 2)
      .transform(i => i * 2);

    expect(transformed).to.eql(collection);
    expect(transformed.all()).to.eql([4, 8, 12, 16]);
  });
};
