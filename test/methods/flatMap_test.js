'use strict';

module.exports = (it, expect, collect) => {
  it('should flat map', () => {
    const collection = collect([
      { tags: ['tag1', 'tag2'] },
      { tags: ['tag3', 'tag4'] },
    ]);

    const flatMapped = collection.flatMap(item => item.tags);

    expect(flatMapped.all()).to.eql(['tag1', 'tag2', 'tag3', 'tag4']);
  });

  it('should iterate through the collection and passes each value to the given callback', () => {
    const collection = collect([
      {
        name: 'Xherdan Shaqiri',
        number: 23,
      },
      {
        name: 'Mohamed Salah',
        number: 11,
      },
    ]);

    const flatMapped = collection.flatMap(value => value.name.toUpperCase());

    expect(flatMapped.all()).to.eql(['XHERDAN SHAQIRI', 'MOHAMED SALAH']);

    expect(collection.all())
      .to
      .eql([
        {
          name: 'Xherdan Shaqiri',
          number: 23,
        },
        {
          name: 'Mohamed Salah',
          number: 11,
        },
      ]);
  });

  it('should override the value of the key already exists', () => {
    const collection = collect([
      ['Sadio Mané'],
      ['Roberto Firmino'],
      ['Mohamed Salah'],
    ]);

    const flatMapped = collection.flatMap(values => values[0].toUpperCase());

    expect(flatMapped.all()).to.eql([
      'SADIO MANÉ',
      'ROBERTO FIRMINO',
      'MOHAMED SALAH',
    ]);
  });

  it('should receive index as second parameter', () => {
    const collection = collect(['Fabinho', 'Keíta']);

    const flatMapped = collection.flatMap(values => values.toUpperCase());

    expect(flatMapped.all()).to.eql(['FABINHO', 'KEÍTA']);
  });
};
