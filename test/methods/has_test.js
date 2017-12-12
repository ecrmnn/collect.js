'use strict';

const unicorn = {
  animal: 'unicorn',
  ability: 'magical',
};

module.exports = (it, expect, collect) => {
  it('should determine if a key exists in the collection', () => {
    const collection = collect(unicorn);
    const hasAbility = collection.has('ability');
    const hasName = collection.has('name');

    expect(hasAbility).to.eql(true);
    expect(hasName).to.eql(false);
    expect(collection.all()).to.eql(unicorn);
  });

  it('should accept an array as the argument', () => {
    const collection = collect(unicorn);

    expect(collection.has(['animal', 'ability'])).to.eql(true);
    expect(collection.has(['animal', 'ability', 'name'])).to.eql(false);
    expect(collection.has(['animal', 'name'])).to.eql(false);
    expect(collection.all()).to.eql(unicorn);
  });

  it('should accept an infinite number of arguments', () => {
    const collection = collect(unicorn);

    expect(collection.has('animal', 'ability')).to.eql(true);
    expect(collection.has('animal', 'ability', 'name')).to.eql(false);
    expect(collection.has('animal', 'name')).to.eql(false);
    expect(collection.all()).to.eql(unicorn);
  });

  it('should determine if all objects have the specified key ' +
    'when given an array of objects', () => {
    const pig = [
      {
        animal: 'unicorn',
        ability: 'magical',
      }, {
        name: 'Piggy',
        animal: 'pig',
        ability: 'filthy',
      },
    ];

    const collection = collect(pig);
    const hasAbility = collection.has('ability');
    const hasName = collection.has('name');

    expect(hasAbility).to.eql(false);
    expect(hasName).to.eql(false);
    expect(collection.all()).to.eql(pig);
  });
};
