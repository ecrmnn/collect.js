# `splice()`

The splice method removes and returns a slice of items starting at the specified index:

```js
const collection = collect([1, 2, 3, 4, 5]);

const chunk = collection.splice(2);

chunk.all();

// [3, 4, 5]

collection.all();

// [1, 2]
```

You may pass a second argument to limit the size of the resulting chunk:

```js
const collection = collect([1, 2, 3, 4, 5]);

const chunk = collection.splice(2, 1);

chunk.all();

// [3]

collection.all();

// [1, 2, 4, 5]
```

In addition, you can pass a third argument containing the new items to replace the items removed from the collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

const chunk = collection.splice(2, 1, [10, 11]);

chunk.all();

// [3]

collection.all();

// [1, 2, 10, 11, 4, 5]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/splice.js)