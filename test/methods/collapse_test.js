'use strict';

module.exports = (it, expect, collect) => {
  it('should collapse a collection of arrays into a flat collection', () => {
    const collection = collect([[1], [{ name: 'Daniel' }, 5], ['xoxo']]);
    const collapsed = collection.collapse();

    expect(collapsed.all()).to.eql([1, { name: 'Daniel' }, 5, 'xoxo']);
  });

  it('should collapse a collection of arrays and collection into a flat collection', () => {
    const collection = collect([[1], [{ name: 'Daniel' }, 5], collect([2, 3, 4]), collect([{ ok: 'yes' }, 6]), ['xoxo']]);
    const collapsed = collection.collapse();

    expect(collapsed.all()).to.eql([1, { name: 'Daniel' }, 5, 2, 3, 4, { ok: 'yes' }, 6, 'xoxo']);
  });
};
