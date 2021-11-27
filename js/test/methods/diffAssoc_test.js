'use strict';

module.exports = (it, expect, collect) => {
  it('should get the items in the collection whose keys and values are not present in the given items', () => {
    const collection1 = collect({ id: 1, first_word: 'Hello', not_affected: 'value' });
    const collection2 = collect({ id: 123, foo_bar: 'Hello', not_affected: 'value' });

    expect({ id: 1, first_word: 'Hello' }).to.eql(collection1.diffAssoc(collection2).all());

    const collection3 = collect({
      color: 'orange',
      type: 'fruit',
      remain: 6,
    });

    const collection4 = collection3.diffAssoc({
      color: 'yellow',
      type: 'fruit',
      remain: 3,
      used: 6,
    });

    expect(collection4.all()).to.eql({ color: 'orange', remain: 6 });
  });
};
