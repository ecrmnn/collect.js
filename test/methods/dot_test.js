'use strict';

module.exports = (it, expect, collect) => {
  it('should dot keyed collection', () => {
    const collection = collect({
      name: 'Taylor',
      meta: {
        foo: 'bar',
        baz: ['boom', 'boom', 'boom'],
        bam: {
          boom: 'bip',
        },
      },
    });

    expect(collection.dot().all()).to.eql({
      name: 'Taylor',
      'meta.foo': 'bar',
      'meta.baz': ['boom', 'boom', 'boom'],
      'meta.bam.boom': 'bip',
    });
  });

  it('should dot indexed collection', () => {
    const collection = collect({
      foo: {
        0: 'bar',
        1: 'baz',
        baz: 'boom',
      },
    });

    expect(collection.dot().all()).to.eql({
      'foo.0': 'bar',
      'foo.1': 'baz',
      'foo.baz': 'boom',
    });
  });

  it('should dot documentation example', () => {
    const person = collect({
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
    });

    const dotted = person.dot();

    const all = dotted.all();

    const expected = {
      'name.first_name': 'Marie',
      'name.last_name': 'Valentine',
      'address.line_1': '2992 Eagle Drive',
      'address.line_2': '',
      'address.suburb': 'Detroit',
      'address.state': 'MI',
      'address.postcode': '48219',
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

    expect(collection.dot().all()).to.eql(data);
  });
};
