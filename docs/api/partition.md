# `partition()`

The partition method may be combined with destructuring to separate elements that pass a given truth test from those that do not:

```js
const collection = collect([1, 2, 3, 4, 5, 6]);

const [underThree, overThree] = collection.partition(i => i < 3);
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/partition.js)