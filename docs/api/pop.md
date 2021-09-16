# `pop()`

The pop method removes and returns the last item from the collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.pop();

// 5

collection.all();

// => [1, 2, 3, 4]
```

You may provide number of items to pop. This will return the popped items in a new collection:
```js
const collection = collect([1, 2, 3, 4, 5]);

collection.pop(2).all();

// [4, 5]

collection.all();

// => [1, 2, 3]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/pop.js)