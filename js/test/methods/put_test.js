'use strict';

module.exports = (it, expect, collect) => {
  it('should set the given key and value in the collection', () => {
    const collection = collect({ name: 'Roberto Firmino' });
    const modified = collection.put('club', 'Liverpool FC');

    expect(collection).to.eql(modified);
    expect(collection.all()).to.eql({
      name: 'Roberto Firmino',
      club: 'Liverpool FC',
    });
  });
};
