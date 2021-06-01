# `chunkWhile()`

The chunkWhile method breaks the collection into multiple, smaller collections based on the evaluation of the given function:

```js
const collection = collect(['A', 'A', 'B', 'B', 'C', 'C', 'C', 'D']);

const chunks = collection.chunkWhile((current, key, chunk) => current === chunk.last());

chunks.all();

// [['A', 'A'], ['B', 'B'], ['C', 'C', 'C'], ['D']]
```

An empty collection is returned when `chunkWhile` is applied on an empty collection:

```js
const collection = collect([]);

const chunks = collection.chunkWhile((current, key, chunk) => current === chunk.last());

chunks.all();

// []
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/chunkWhile.js)
