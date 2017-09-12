'use strict';

const player = {
  firstname: 'Sadio',
  lastname: 'Mané',
};

module.exports = (it, expect, collect) => {
  it('should return the item at a given key and remove it from the collection', () => {
    const a = collect(player);
    const b = collect(player);

    expect(a.pull('firstname')).to.eql('Sadio');
    expect(a.all()).to.eql({ lastname: 'Mané' });
    expect(b.all()).to.eql(player);
  });

  it('should return null if the key does not exist', () => {
    const collection = collect(player);
    expect(collection.pull('non-existing-key')).to.eql(null);
  });
};
