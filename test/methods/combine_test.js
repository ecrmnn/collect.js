'use strict';

module.exports = (it, expect, collect) => {
  it('should combine the keys of the collection with the values of another array', () => {
    const collection = collect(['name', 'number']);
    const combine = collection.combine(['Steven Gerrard', 8]);

    expect(combine.all()).to.eql({
      name: 'Steven Gerrard',
      number: 8,
    });
    expect(collection.all()).to.eql(['name', 'number']);
  });

  it('should work when the collection is a string', () => {
    const collection = collect('name');
    const combine = collection.combine('Steven Gerrard');
    const combine2 = collection.combine(['Sadio Mané']);

    expect(combine.all()).to.eql({ name: 'Steven Gerrard' });
    expect(combine2.all()).to.eql({ name: 'Sadio Mané' });
    expect(collection.all()).to.eql('name');
  });

  it('should be able to combine with a string', () => {
    const collection = collect(['name', 'number']);
    const combine = collection.combine('Joël Matip');

    expect(combine.all()).to.eql({ name: 'Joël Matip' });
    expect(collection.all()).to.eql(['name', 'number']);
  });

  it('should be able to combine with the values of an object', () => {
    const collection = collect(['name', 'shortName']);
    const combine = collection.combine({ o: 'Liverpool FC', x: 'LFC' });

    expect(combine.all()).to.eql({
      name: 'Liverpool FC',
      shortName: 'LFC',
    });

    expect(collection.all()).to.eql(['name', 'shortName']);
  });

  it('should be able to combine with a collection', () => {
    const collection = collect('name');
    const combine = collection.combine(collect('Roberto Firmino'));

    expect(combine.all()).to.eql({ name: 'Roberto Firmino' });
    expect(collection.all()).to.eql('name');
  });
};
