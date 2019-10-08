# `map()`

The map method iterates through the collection and passes each value to the given callback. The callback is free to modify the item and return it, thus forming a new collection of modified items:

```js
const collection = collect([1, 2, 3, 4, 5]);

const multiplied = collection.map(item => item * 2);

multiplied.all();

// [2, 4, 6, 8, 10]
```

> Like most other collection methods, `map` returns a new collection instance; it does not modify the collection it is called on. If you want to transform the original collection, use the `transform` method.

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/map.js)