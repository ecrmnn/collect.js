'use strict';

module.exports = (it, expect, collect) => {
  it('should execute the callback when the collection is not empty', () => {
    const collection = collect([]);

    collection.unlessEmpty(c => c.push('Mohamed Salah'));

    expect(collection.all()).to.eql([]);
  });

  it('should execute the callback when the collection object is not empty', () => {
    const collection = collect({});

    collection.unlessEmpty(c => c.put('name', 'Mohamed Salah'));

    expect(collection.all()).to.eql({});
  });

  it('should not execute the callback when the collection is not empty', () => {
    const collection = collect([
      'Roberto Firmino',
      'Sadio Mané',
    ]);

    collection.unlessEmpty(c => c.push('Mohamed Salah'));

    expect(collection.all()).to.eql([
      'Roberto Firmino',
      'Sadio Mané',
      'Mohamed Salah',
    ]);
  });

  it('should not execute the callback when the collection object is not empty', () => {
    const collection = collect({
      player1: 'Roberto Firmino',
      player2: 'Sadio Mané',
    });

    collection.unlessEmpty(c => c.put('player3', 'Mohamed Salah'));

    expect(collection.all()).to.eql({
      player1: 'Roberto Firmino',
      player2: 'Sadio Mané',
      player3: 'Mohamed Salah',
    });
  });

  it('should execute the default when the collection is not empty', () => {
    const collection = collect([
      'Sadio Mané',
    ]);

    collection.unlessEmpty(c => c.push('Mohamed Salah'), c => c.push('Xherdan Shaqiri'));

    expect(collection.all()).to.eql([
      'Sadio Mané',
      'Mohamed Salah',
    ]);
  });

  it('should execute the default when the collection object is not empty', () => {
    const collection = collect({});

    collection.unlessEmpty(c => c.put('name', 'Mohamed Salah'), c => c.put('name', 'Naby Keïta'));

    expect(collection.all()).to.eql({
      name: 'Naby Keïta',
    });
  });
};
