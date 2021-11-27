'use strict';

module.exports = (it, expect, collect) => {
  it('should execute the callback when the collection is empty', () => {
    const collection = collect([]);

    collection.unlessNotEmpty(c => c.push('Mohamed Salah'));

    expect(collection.all()).to.eql([
      'Mohamed Salah',
    ]);
  });

  it('should execute the callback when the collection object is empty', () => {
    const collection = collect({});

    collection.unlessNotEmpty(c => c.put('name', 'Mohamed Salah'));

    expect(collection.all()).to.eql({
      name: 'Mohamed Salah',
    });
  });

  it('should not execute the callback when the collection is empty', () => {
    const collection = collect([
      'Roberto Firmino',
      'Sadio Mané',
    ]);

    collection.unlessNotEmpty(c => c.push('Mohamed Salah'));

    expect(collection.all()).to.eql([
      'Roberto Firmino',
      'Sadio Mané',
    ]);
  });

  it('should not execute the callback when the collection object is empty', () => {
    const collection = collect({
      player1: 'Roberto Firmino',
      player2: 'Sadio Mané',
    });

    collection.unlessNotEmpty(c => c.put('player3', 'Mohamed Salah'));

    expect(collection.all()).to.eql({
      player1: 'Roberto Firmino',
      player2: 'Sadio Mané',
    });
  });

  it('should execute the default when the collection is empty', () => {
    const collection = collect([
      'Sadio Mané',
    ]);

    collection.unlessNotEmpty(c => c.push('Mohamed Salah'), c => c.push('Xherdan Shaqiri'));

    expect(collection.all()).to.eql([
      'Sadio Mané',
      'Xherdan Shaqiri',
    ]);
  });

  it('should execute the default when the collection object is empty', () => {
    const collection = collect({
      player1: 'Xherdan Shaqiri',
    });

    collection.unlessNotEmpty(c => c.put('player2', 'Mohamed Salah'), c => c.put('player2', 'Sadio Mané'));

    expect(collection.all()).to.eql({
      player1: 'Xherdan Shaqiri',
      player2: 'Sadio Mané',
    });
  });
};
