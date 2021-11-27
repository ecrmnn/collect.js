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

  it('should accept a default value', () => {
    const collection = collect(player);
    const pulled = collection.pull('key-does-not-exist', 'Joe');

    expect(pulled).to.eql('Joe');
    expect(collection.all()).to.eql(player);
  });

  it('should accept a callback as the default value', () => {
    const collection = collect(player);
    const pulled = collection.pull('key-does-not-exist', () => 'Doe');

    expect(pulled).to.eql('Doe');
    expect(collection.all()).to.eql(player);
  });
};
