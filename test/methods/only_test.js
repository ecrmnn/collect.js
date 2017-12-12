'use strict';

const post = {
  id: 1,
  title: 'My first post!',
  author: 'ecrmnn',
};

module.exports = (it, expect, collect) => {
  it('should only return the specified properties of an object', () => {
    const collection = collect(post);
    const filtered = collection.only(['title', 'author']);

    expect(collection.all()).to.eql(post);
    expect(filtered.all()).to.eql({
      title: 'My first post!',
      author: 'ecrmnn',
    });
  });

  it('should only return the specified items in an array', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const filtered = collection.only([5, 1]);

    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);
    expect(filtered.all()).to.eql([1, 5]);

    const collection2 = collect([1, 2, 3, 4, 5]);
    const filtered2 = collection2.only([2, 3, 12]);

    expect(collection2.all()).to.eql([1, 2, 3, 4, 5]);
    expect(filtered2.all()).to.eql([2, 3]);
  });

  it('should take an infinite number of arguments', () => {
    const collection = collect([1, 2, 3, 4, 5]);
    const filtered = collection.only(5, 1, 3);

    expect(collection.all()).to.eql([1, 2, 3, 4, 5]);
    expect(filtered.all()).to.eql([1, 3, 5]);
  });
};
