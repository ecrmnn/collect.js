'use strict';

module.exports = (it, expect, collect) => {
  it('should return an object containing a single key / value pair:', () => {
    const employees = [
      {
        name: 'John',
        department: 'Sales',
        email: 'john@example.com',
      },
      {
        name: 'Jane',
        department: 'Marketing',
        email: 'jane@example.com',
      },
    ];

    const collection = collect(employees);

    const keyed = collection.mapWithKeys(item => [item.email, item.name]);

    expect(keyed.all()).to.eql({
      'john@example.com': 'John',
      'jane@example.com': 'Jane',
    });

    expect(collection.all()).to.eql(employees);
  });

  it('should also work with nested objects', () => {
    const players = {
      player1: {
        name: 'John',
        department: 'Sales',
        email: 'john@example.com',
      },
      player2: {
        name: 'Jane',
        department: 'Marketing',
        email: 'jane@example.com',
      },
    };

    const nestedObject = collect(players);

    const keyed = nestedObject.mapWithKeys(item => [item.email, item.name]);

    expect(keyed.all()).to.eql({
      'john@example.com': 'John',
      'jane@example.com': 'Jane',
    });

    expect(nestedObject.all()).to.eql({
      player1: {
        name: 'John',
        department: 'Sales',
        email: 'john@example.com',
      },
      player2: {
        name: 'Jane',
        department: 'Marketing',
        email: 'jane@example.com',
      },
    });
  });
};
