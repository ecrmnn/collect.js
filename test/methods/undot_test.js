'use strict';

module.exports = (it, expect, collect) => {
  it('should undot keyed collection', () => {
    const collection = collect({
      name: 'Taylor',
      'meta.foo': 'bar',
      'meta.baz': ['boom', 'boom', 'boom'],
      'meta.bam.boom': 'bip',
    });

    expect(collection.undot().all()).to.eql({
      name: 'Taylor',
      meta: {
        foo: 'bar',
        baz: ['boom', 'boom', 'boom'],
        bam: {
          boom: 'bip',
        },
      },
    });
  });

  it('should undot indexed collection', () => {
    const collection = collect({
      'foo.0': 'bar',
      'foo.1': 'baz',
      'foo.baz': 'boom',
    });

    expect(collection.undot().all()).to.eql({
      foo: {
        0: 'bar',
        1: 'baz',
        baz: 'boom',
      },
    });
  });

  it('should undot documentation example', () => {
    const person = collect({
      'name.first_name': 'Marie',
      'name.last_name': 'Valentine',
      'address.line_1': '2992 Eagle Drive',
      'address.line_2': '',
      'address.suburb': 'Detroit',
      'address.state': 'MI',
      'address.postcode': '48219',
    });

    const undotted = person.undot();

    const all = undotted.all();

    const expected = {
      name: {
        first_name: 'Marie',
        last_name: 'Valentine',
      },
      address: {
        line_1: '2992 Eagle Drive',
        line_2: '',
        suburb: 'Detroit',
        state: 'MI',
        postcode: '48219',
      },
    };

    expect(all).to.eql(expected);
  });

  it('should ignore array based collections', () => {
    const data = [
      'name.first',
      'name.last',
      'xoxo',
    ];

    const collection = collect(data);

    expect(collection.undot().all()).to.eql(data);
  });
};
