# `countBy()`

The countBy method counts the occurences of values in the collection. By default, the method counts the occurrences of every element:

```js
const collection = collect([1, 2, 2, 2, 3]);

const counted = collection.countBy();

counted.all();

// {
//   1: 1,
//   2: 3,
//   3: 1,
// }
```

However, you pass a callback to the countBy method to count all items by a custom value:

```js
const collection = collect([
  'alice@gmail.com',
  'bob@yahoo.com',
  'carlos@gmail.com',
]);

const counted = collection.countBy(email => email.split('@')[1]);

counted.all();

// {
//   'gmail.com': 2,
//   'yahoo.com': 1,
// }
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/countBy.js)