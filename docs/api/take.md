# `take()`

The take method returns a new collection with the specified number of items:
You may also pass a negative integer to take the specified amount of items from the end of the collection:

```js
const collection = collect([0, 1, 2, 3, 4, 5]);

const chunk = collection.take(3);

chunk.all();

// [0, 1, 2]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/take.js)