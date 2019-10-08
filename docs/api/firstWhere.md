# `firstWhere()`

The firstWhere method returns the first element in the collection with the given key / value pair:

```js
const collection = collect([
  { name: 'Regena', age: 12 },
  { name: 'Linda', age: 14 },
  { name: 'Diego', age: 23 },
  { name: 'Linda', age: 84 },
]);

collection.firstWhere('name', 'Linda');

// { name: 'Linda', age: 14 }
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/firstWhere.js)