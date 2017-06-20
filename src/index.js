'use strict';

function Collection(collection) {
  if (collection === undefined) {
    this.items = [];
  } else {
    this.items = collection;
  }
};

Collection.prototype.unique = function (key) {
  let collection;

  if (key === undefined) {
    collection = this.items.filter(function (element, index, self) {
      return self.indexOf(element) === index;
    });
  } else {
    collection = [];

    const usedKeys = [];

    for (let iterator = 0; iterator < this.items.length; iterator++) {
      let uniqueKey;
      if (typeof key === 'function') {
        uniqueKey = key(this.items[iterator]);
      } else {
        uniqueKey = this.items[iterator][key];
      }

      if (usedKeys.indexOf(uniqueKey) === -1) {
        collection.push(this.items[iterator]);
        usedKeys.push(uniqueKey);
      }
    }
  }

  return new Collection(collection);
};

Collection.prototype.sum = function (key) {
  let total = 0;

  if (key === undefined) {
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i];
    }
  } else if (typeof key === 'function') {
    for (let i = 0; i < this.items.length; i++) {
      total += key(this.items[i]);
    }
  } else {
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i][key];
    }
  }

  return total;
};

Collection.prototype.average = function (key) {
  return this.avg(key);
};

Collection.prototype.avg = function (key) {
  if (key === undefined) {
    return this.sum() / this.items.length;
  }

  return new Collection(this.items).pluck(key).sum() / this.items.length;
};

Collection.prototype.median = function (key) {
  const length = this.items.length;

  if (key === undefined) {
    if (length % 2 === 0) {
      return (this.items[length / 2 - 1] + this.items[length / 2]) / 2;
    }

    return this.items[Math.floor(length / 2)];
  }

  if (length % 2 === 0) {
    return (this.items[length / 2 - 1][key] + this.items[length / 2][key]) / 2;
  }

  return this.items[Math.floor(length / 2)][key];
};

Collection.prototype.mode = function (key) {
  let values = [];
  let highestCount = 1;

  if (!this.items.length) {
    return null;
  }

  this.items.forEach(function (item) {
    const _values = values.filter(function (value) {
      if (key !== undefined) {
        return value.key === item[key];
      }

      return value.key === item;
    });


    if (!_values.length) {
      if (key !== undefined) {
        values.push({ key: item[key], count: 1 });
      } else {
        values.push({ key: item, count: 1 });
      }
    } else {
      const count = ++_values[0].count;

      if (count > highestCount) {
        highestCount = count;
      }
    }
  });

  return values.filter(function (value) {
    return value.count === highestCount;
  }).map(function (value) {
    return value.key;
  });
};

Collection.prototype.count = function () {
  return this.items.length
};

Collection.prototype.isEmpty = function () {
  return !this.items.length;
};

Collection.prototype.each = function (fn) {
  this.items.forEach(fn);

  return this;
};

Collection.prototype.map = function (fn) {
  const collection = this.items.map(function (item) {
    return fn(item);
  });

  return new Collection(collection);
};

Collection.prototype.mapWithKeys = function (fn) {
  const collection = {};

  this.items.map(function (item) {
    const array = fn(item);
    collection[array[0]] = array[1];
  });

  return new Collection(collection);
};

Collection.prototype.filter = function (fn) {
  const collection = this.items.filter(function (item) {
    return fn(item);
  });

  return new Collection(collection);
};

Collection.prototype.has = function (key) {
  if (Array.isArray(this.items)) {
    return this.items.filter(function (item) {
        return item.hasOwnProperty(key);
      }).length > 0;
  }

  return this.items.hasOwnProperty(key);
};

Collection.prototype.first = function (fn) {
  if (typeof fn === 'function') {
    return this.items.filter(fn)[0];
  }

  return this.items[0];
};

Collection.prototype.last = function (fn) {
  if (typeof fn === 'function') {
    const collection = this.items.filter(fn);

    return collection[collection.length - 1];
  }

  return this.items[this.items.length - 1];
};

Collection.prototype.get = function (key, defaultValue) {
  if (this.items.hasOwnProperty(key)) {
    return this.items[key];
  }

  if (typeof defaultValue === 'function') {
    return defaultValue();
  }

  return defaultValue || null;
};

Collection.prototype.only = function (properties) {
  const collection = {};

  for (const prop in this.items) {
    if (properties.indexOf(prop) !== -1) {
      collection[prop] = this.items[prop];
    }
  }

  return new Collection(collection);
};

Collection.prototype.except = function (properties) {
  const collection = {};

  for (const prop in this.items) {
    if (properties.indexOf(prop) === -1) {
      collection[prop] = this.items[prop];
    }
  }

  return new Collection(collection);
};

Collection.prototype.groupBy = function (key) {
  let collection = {};

  this.items.forEach(function (item, index) {
    let resolvedKey;

    if (typeof key === 'function') {
      resolvedKey = key(item, index);
    } else {
      resolvedKey = item[key];
    }

    if (!collection.hasOwnProperty(resolvedKey)) {
      collection[resolvedKey] = [];
    }

    collection[resolvedKey].push(item);
  });

  return new Collection(collection);
};

Collection.prototype.where = function (key, operator, value) {
  if (value === undefined) {
    value = operator;
    operator = '===';
  }

  return new Collection(
    this.items.filter(function (item) {
      switch (operator) {
        case '==':
          return item[key] == value;

        case '===':
          return item[key] === value;

        case '!=':
          return item[key] != value;

        case '!==':
          return item[key] !== value;

        case '<':
          return item[key] < value;

        case '<=':
          return item[key] <= value;

        case '>':
          return item[key] > value;

        case '>=':
          return item[key] >= value;
      }
    })
  );
};

Collection.prototype.whereIn = function (key, values) {
  const collection = this.items.filter(function (item) {
    return values.indexOf(item[key]) !== -1;
  });

  return new Collection(collection);
};

Collection.prototype.diff = function (values) {
  if (values instanceof Collection) {
    values = values.all();
  }

  const collection = this.items.filter(function (item) {
    return values.indexOf(item) === -1;
  });

  return new Collection(collection);
};

Collection.prototype.intersect = function (values) {
  if (values instanceof Collection) {
    values = values.all();
  }

  const collection = this.items.filter(function (item) {
    return values.indexOf(item) !== -1;
  });

  return new Collection(collection);
};

Collection.prototype.pluck = function (value, key) {
  if (key !== undefined) {
    const collection = {};

    this.items.forEach(function (item) {
      collection[item[key]] = item[value];
    });

    return new Collection(collection);
  }

  const collection = this.items.filter(function (item) {
    return item.hasOwnProperty(value);
  }).map(function (item) {
    return item[value];
  });

  return new Collection(collection);
};

Collection.prototype.implode = function (key, glue) {
  if (glue === undefined) {
    return this.items.join(key);
  }

  return new Collection(this.items).pluck(key).all().join(glue);
};

Collection.prototype.pull = function (key) {
  const value = this.items[key] || null;
  delete this.items[key];
  return value;
};

Collection.prototype.push = function (item) {
  this.items.push(item);

  return this;
};

Collection.prototype.put = function (key, value) {
  this.items[key] = value;

  return this;
};

Collection.prototype.shift = function () {
  return this.items.shift();
};

Collection.prototype.chunk = function (size) {
  const chunks = [];

  while (this.items.length) {
    chunks.push(this.items.splice(0, size));
  }

  return new Collection(chunks);
};

Collection.prototype.collapse = function () {
  return new Collection([].concat.apply([], this.items));
};

Collection.prototype.combine = function (array) {
  const collection = {};

  this.items.map(function (key, iterator) {
    collection[key] = array[iterator];
  }.bind(this));

  return new Collection(collection);
};

Collection.prototype.flip = function () {
  const collection = {};

  Object.keys(this.items).map(function (key) {
    collection[this.items[key]] = key;
  }.bind(this));

  return new Collection(collection);
};

Collection.prototype.forget = function (key) {
  delete this.items[key];
  return this;
};

Collection.prototype.forPage = function (page, chunk) {
  const collection = this.items.slice(page * chunk - chunk, page * chunk);

  return new Collection(collection);
};

Collection.prototype.keys = function () {
  if (Array.isArray(this.items)) {
    const keys = [];

    this.items.forEach(function (object) {
      Object.keys(object).forEach(function (key) {
        keys.push(key);
      });
    });

    return new Collection(keys).unique();
  }

  return new Collection(Object.keys(this.items));
};

Collection.prototype.merge = function (objectOrArray) {
  if (Array.isArray(objectOrArray)) {
    return new Collection(this.items.concat(objectOrArray));
  }

  const collection = Object.create(this.items);

  Object.keys(objectOrArray).map(function (key) {
    collection[key] = objectOrArray[key];
  });

  return new Collection(collection);
};

Collection.prototype.max = function (key) {
  if (typeof key === 'string') {
    return Math.max.apply(Math, this.pluck(key).all());
  }

  return Math.max.apply(Math, this.items);
};

Collection.prototype.pipe = function (fn) {
  return fn(this);
};

Collection.prototype.contains = function (key, value) {
  if (value !== undefined) {
    return (this.items.hasOwnProperty(key) && this.items[key] === value);
  }

  if (typeof key === 'function') {
    return this.items.filter(function (item, index) {
        return key(item, index);
      }).length > 0;
  }

  if (Array.isArray(this.items)) {
    return this.items.indexOf(key) !== -1;
  }

  return this.items.hasOwnProperty(key);
};

Collection.prototype.diffKeys = function (object) {
  if (object instanceof Collection) {
    object = object.all();
  }

  const objectKeys = Object.keys(object);

  const diffKeys = Object.keys(this.items).filter(function (item) {
    return objectKeys.indexOf(item) === -1;
  });

  return new Collection(Object.create(this.items)).only(diffKeys);
};

Collection.prototype.every = function (fn) {
  return this.items.filter(fn).length === this.items.length;
};

Collection.prototype.nth = function (n, offset) {
  if (offset === undefined) {
    offset = 0;
  }

  const collection = this.items
    .slice(offset)
    .filter(function (item, index) {
      return index % n === 0;
    });

  return new Collection(collection);
};

Collection.prototype.flatMap = function (fn) {
  const values = [];

  for (const prop in this.items) {
    values.push(this.items[prop]);
  }

  const newValues = fn(values);

  const collection = {};

  Object.keys(this.items).map(function (value, index) {
    return collection[value] = newValues[index];
  });

  return new Collection(collection);
};

Collection.prototype.flatten = function (depth) {
  if (depth === undefined) {
    depth = Infinity;
  }

  let fullyFlattened = false;
  let collection = [];

  const flat = function (items) {
    collection = [];

    if (Array.isArray(items)) {
      items.forEach(function (item) {
        if (typeof item === 'string') {
          collection.push(item);
        } else if (Array.isArray(item)) {
          collection = collection.concat(item);
        } else {
          for (const prop in item) {
            collection = collection.concat(item[prop]);
          }
        }
      })
    } else {
      for (const prop in items) {
        if (typeof items[prop] === 'string') {
          collection.push(items[prop]);
        } else if (Array.isArray(items[prop])) {
          collection = collection.concat(items[prop]);
        } else {
          for (const prop in items) {
            collection = collection.concat(items[prop]);
          }
        }
      }
    }

    fullyFlattened = collection.filter(function (item) {
        return typeof item === 'object';
      }).length === 0;


    depth--;
  }

  flat(this.items);

  while (!fullyFlattened && depth > 0) {
    flat(collection);
  }

  return new Collection(collection);
};

Collection.prototype.keyBy = function (key) {
  let collection = {};

  if (typeof key === 'function') {
    this.items.map(function (item) {
      collection[key(item)] = item;
    });
  } else {
    this.items.forEach(function (item) {
      collection[item[key]] = item;
    });
  }

  return new Collection(collection);
};

Collection.prototype.min = function (key) {
  if (key !== undefined) {
    return Math.min.apply(Math, this.pluck(key).all());
  }

  return Math.min.apply(Math, this.items);
};

Collection.prototype.pop = function () {
  return this.items.pop();
};

Collection.prototype.prepend = function (value, key) {
  if (key !== undefined) {
    return this.put(key, value);
  }

  this.items.unshift(value);

  return this;
};

Collection.prototype.shuffle = function () {
  let j, x, i;
  for (i = this.items.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = this.items[i - 1];
    this.items[i - 1] = this.items[j];
    this.items[j] = x;
  }

  return this;
};

Collection.prototype.random = function (length) {
  this.shuffle();

  if (length !== undefined || length === 1) {
    this.items.splice(0, this.items.length - length);

    return this;
  }

  return this.items[0];
};

Collection.prototype.reduce = function (fn, carry) {
  let result = null;
  let _carry = null;

  if (carry !== undefined) {
    _carry = carry;
  }

  this.items.forEach(function (item) {
    result = fn(_carry, item);
    _carry = result;
  });

  return result;
};

Collection.prototype.reject = function (fn) {
  const collection = this.items.filter(function (item) {
    return !fn(item);
  });

  return new Collection(collection);
};

Collection.prototype.reverse = function () {
  const collection = [].concat(this.items).reverse();

  return new Collection(collection);
};

Collection.prototype.search = function (valueOrFunction, strict) {
  if (typeof valueOrFunction === 'function') {
    valueOrFunction = this.items.filter(function (value, key) {
      return valueOrFunction(value, key);
    })[0];
  }

  const operators = {
    normal: function (a, b) {
      return a == b;
    },
    strict: function (a, b) {
      return a === b;
    }
  };

  const itemKey = this.items.filter(function (item, key) {
    if (strict === undefined) {
      if (operators.normal(item, valueOrFunction)) {
        return item;
      }
    } else {
      if (operators.strict(item, valueOrFunction)) {
        return item;
      }
    }
  })[0];

  const index = this.items.indexOf(itemKey);

  if (index === -1) {
    return false;
  }

  return index;
};

Collection.prototype.slice = function (remove, limit) {
  let collection = this.items.slice(remove);

  if (limit !== undefined) {
    collection = collection.slice(0, limit);
  }

  return new Collection(collection);
};

Collection.prototype.sort = function (fn) {
  const collection = [].concat(this.items);

  if (fn === undefined) {
    if (this.every(item => typeof item === 'number')) {
      collection.sort((a, b) => a - b);
    } else {
      collection.sort();
    }
  } else {
    collection.sort(fn);
  }

  return new Collection(collection);
};

Collection.prototype.sortBy = function (valueOrFunction) {
  const collection = [].concat(this.items);

  if (typeof valueOrFunction === 'function') {
    collection.sort(function compare(a, b) {
      if (valueOrFunction(a) < valueOrFunction(b))
        return -1;
      if (valueOrFunction(a) > valueOrFunction(b))
        return 1;
      return 0;
    });
  } else {
    collection.sort(function compare(a, b) {
      if (a[valueOrFunction] < b[valueOrFunction])
        return -1;
      if (a[valueOrFunction] > b[valueOrFunction])
        return 1;
      return 0;
    });
  }

  return new Collection(collection);
};

Collection.prototype.splice = function (index, limit, replace) {
  const slicedCollection = this.slice(index, limit);

  this.items = this.diff(slicedCollection.all()).all();

  if (Array.isArray(replace)) {
    for (let iterator = 0; iterator < replace.length; iterator++) {
      this.items.splice(index + iterator, 0, replace[iterator]);
    }
  }

  return slicedCollection;
};

Collection.prototype.sortByDesc = function (valueOrFunction) {
  return this.sortBy(valueOrFunction).reverse();
};

Collection.prototype.take = function (length) {
  if (length < 0) {
    return new Collection(this.items.slice(length));
  }

  return new Collection(this.items.slice(0, length));
};

Collection.prototype.toJson = function () {
  return JSON.stringify(this.items);
};

Collection.prototype.transform = function (fn) {
  this.items = this.items.map(function (item) {
    return fn(item);
  });

  return this;
};

Collection.prototype.union = function (object) {
  const collection = Object.create(this.items);

  for (const prop in object) {
    if (!this.items.hasOwnProperty(prop)) {
      collection[prop] = object[prop];
    }
  }

  return new Collection(collection);
};

Collection.prototype.whereNotIn = function (key, values) {
  let collection = this.items;

  values.forEach(function (value) {
    collection = collection.filter(function (item) {
      return item[key] !== value
    });
  }.bind(this));

  return new Collection(collection);
};

Collection.prototype.zip = function (array) {
  const collection = this.items.map(function (item, index) {
    return [item, array[index]];
  });

  return new Collection(collection);
};

Collection.prototype.values = function () {
  const collection = [];

  for (const prop in this.items) {
    collection.push(this.items[prop]);
  }

  return new Collection(collection);
};

Collection.prototype.isNotEmpty = function () {
  return !this.isEmpty();
};

Collection.prototype.partition = function (fn) {
  const arrays = [[], []];

  this.items.forEach(function (item) {
    if (fn(item) === true) {
      arrays[0].push(item);
    } else {
      arrays[1].push(item);
    }
  });

  return arrays;
};

Collection.prototype.split = function (numberOfGroups) {
  const itemsPerGroup = Math.round(this.items.length / numberOfGroups);

  const items = JSON.parse(JSON.stringify(this.items));
  const collection = [];

  for (let iterator = 0; iterator < numberOfGroups; iterator++) {
    collection.push(items.splice(0, itemsPerGroup));
  }

  return collection;
};

Collection.prototype.when = function (value, fn) {
  if (value) {
    fn(this);
  }
};

Collection.prototype.times = function (times, fn) {
  for (let iterator = 1; iterator <= times; iterator++) {
    this.items.push(fn(iterator));
  }

  return this;
};

Collection.prototype.tap = function (fn) {
  fn(this);
  return this;
};

Collection.prototype.all = function () {
  return this.items;
};

Collection.prototype.toArray = function () {
  if (Array.isArray(this.items)) {
    return this.all();
  }

  return this.values().all();
};

Collection.prototype.macro = function (name, fn) {
  Collection.prototype[name] = fn;
};

Collection.prototype[Symbol.iterator] = function () {
  let index = 0;

  return {
    next: function () {
      return {
        value: this.items[index++],
        done: index > this.items.length
      }
    }.bind(this)
  }
};

module.exports = function (collection) {
  return new Collection(collection);
};
