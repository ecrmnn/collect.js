# `diffUsing()`

The diffUsing method compares the collection against another collection or a plain array based on its values using a callback. This method will return the values in the original collection that are not present in the given collection:

```js
const collection = collect([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
]);

const users = [
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
];

const diff = collection.diffUsing(users, (a, b) => a.age - b.age);

diff.all();

// [{ name: 'Alice', age: 25 }]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/diffUsing.js)
