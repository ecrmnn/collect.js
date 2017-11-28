'use strict';

module.exports = (it, expect, collect) => {
  it('should pass the collection to the given callback and return the result',
    () => {
      const collection = collect([1, 2, 3]);

      const piped = collection.pipe(c => c.sum());

      expect(piped).to.eql(6);
    });

  it('should not modify the original collection', () => {
    const collection = collect(['name', 'number', 'club']);

    const piped = collection.pipe(player => player.combine(['Roberto Firmino', 9, 'Liverpool FC']));

    expect(piped.all()).to.eql({
      name: 'Roberto Firmino',
      number: 9,
      club: 'Liverpool FC',
    });

    expect(collection.all()).to.eql(['name', 'number', 'club']);
  });
};
