'use strict';

module.exports = (it, expect, collect) => {
  it('should dump the collection and exit the current process', () => {
    const originalProcessExit = process.exit;
    let processExitCalls = 0;

    // eslint-disable-next-line no-global-assign
    process.exit = () => {
      processExitCalls += 1;
    };

    const originalConsoleLog = console.log;
    const consoleLogCalls = [];

    console.log = (values) => {
      consoleLogCalls.push(values);
      return values;
    };

    collect([1, 2, 3]).dd();

    // eslint-disable-next-line no-global-assign
    process.exit = originalProcessExit;
    console.log = originalConsoleLog;

    expect(processExitCalls).to.eql(1);
    expect(consoleLogCalls[0]).to.eql([1, 2, 3]);
  });
};
