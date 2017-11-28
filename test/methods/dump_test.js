'use strict';

module.exports = (it, expect, collect) => {
  it('should console log the collection', () => {
    const originalConsoleLog = console.log;

    const consoleLogCalls = [];

    console.log = (values) => {
      consoleLogCalls.push(values);
      return values;
    };

    const collection = collect([1, 2, 3]);
    collection.dump();

    const collection2 = collect({
      name: 'Sadio Mané',
      number: 19,
    });

    collection2.dump();

    console.log = originalConsoleLog;

    expect(consoleLogCalls[0].all()).to.eql(collection.all());
    expect(consoleLogCalls[1].all()).to.eql(collection2.all());
  });
};
