'use strict';

module.exports = (it, expect, collect) => {
  it('should be able to register a custom macro/method', () => {
    collect().macro('uppercase', function () {
      return this.map(item => item.toUpperCase());
    });

    const collection = collect(['a', 'b', 'c']);
    expect(collection.uppercase().all()).to.eql(['A', 'B', 'C']);
    expect(collection.all()).to.eql(['a', 'b', 'c']);

    collect().macro('prefix', function (prefix) {
      return this.map(item => prefix + item);
    });

    expect(collect(['a', 'b', 'c']).prefix('xoxo').all()).to.eql(['xoxoa', 'xoxob', 'xoxoc']);
  });
};
