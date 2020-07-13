# `skipWhile()`

The `skipWhile` method skips items while the given callback returns `true` and then returns the remaining items in the collection:

```js
const collection = collect([1, 2, 3, 4]);

const subset = collection.skipWhile(item => item <= 3);

subset.all();

// [4]
```

> If the callback never returns true, the skipWhile method will return an empty collection.

You may also pass a simple value to the `skipWhile`:

```js
const collection = collect([1, 1, 2, 2, 3, 3, 4, 4]);

const subset = collection.skipWhile(1);

subset.all();

// [2, 2, 3, 3, 4, 4]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/skipWhile.js)
