'use strict';

module.exports = (it, expect, collect) => {
  it('should undot keyed collection', () => {
    const collection = collect({
      name: 'Taylor',
      'meta.foo': 'bar',
      'meta.baz': 'boom',
      'meta.bam.boom': 'bip',
    });

    expect(collection.undot().all()).to.eql({
      name: 'Taylor',
      meta: {
        foo: 'bar',
        baz: 'boom',
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
};
