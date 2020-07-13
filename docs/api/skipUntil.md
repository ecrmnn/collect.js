# `skipUntil()`

The `skipUntil` method skips items until the given callback returns `true` and then returns the remaining items in the collection:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.skipUntil(item => item >= 3);

subset.all();

// [3, 4]
```

You may also pass a simple value to the `skipUntil` method to skip all items until the given value is found:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.skipUntil(3);

subset.all();

// [3, 4]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/skipUntil.js)
