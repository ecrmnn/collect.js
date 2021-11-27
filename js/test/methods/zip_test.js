'use strict';

module.exports = (it, expect, collect) => {
  it('should merge together the values of two arrays', () => {
    const collection = collect(['Chair', 'Desk']);
    const zipped = collection.zip([100, 200]);

    expect(zipped.all()).to.eql([
      collect(['Chair', 100]),
      collect(['Desk', 200]),
    ]);

    expect(collection.all()).to.eql(['Chair', 'Desk']);
  });

  it('should be able to zip with a collection', () => {
    const collection = collect(['Chair', 'Desk']);
    const zipped = collection.zip(collect([100, 200]));

    expect(zipped.all()).to.eql([
      collect(['Chair', 100]),
      collect(['Desk', 200]),
    ]);

    expect(collection.all()).to.eql(['Chair', 'Desk']);
  });
};
