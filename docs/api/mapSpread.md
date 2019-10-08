# `mapSpread()`

The mapSpread method iterates over the collection's items, passing each nested item value into the given callback.
The callback is free to modify the item and return it, thus forming a new collection of modified items:

```js
const collection = collect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

const chunks = collection.chunk(2);

const sequence = chunks.mapSpread((even, odd) => even + odd);

sequence.all();

// [1, 5, 9, 13, 17]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/mapSpread.js)