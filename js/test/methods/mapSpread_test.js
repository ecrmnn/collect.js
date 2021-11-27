'use strict';

module.exports = (it, expect, collect) => {
  it('should iterate over the collection', () => {
    const collection = collect([[1, 'a'], [2, 'b']]);

    const result = [];
    collection.mapSpread((number, character) => {
      result.push([number, character]);
    });

    expect(result).to.eql(collection.all());
  });

  it('should pass key as the last parameter', () => {
    const collection = collect([[1, 'a'], [2, 'b']]);

    const results = [];
    collection.mapSpread((number, character, key) => {
      results.push([number, character, key]);
    });

    expect(results).to.eql([[1, 'a', 0], [2, 'b', 1]]);
  });

  it('should modify the collection', () => {
    const collection = collect([[1, 'a'], [2, 'b']]);

    const results = [];
    const mapped = collection.mapSpread((number, character, key) => {
      results.push([number, character, key]);
    });

    expect(results).to.eql([[1, 'a', 0], [2, 'b', 1]]);
    expect(mapped.all()).not.to.eql(collection.all());
  });
};
