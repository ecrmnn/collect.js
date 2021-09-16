# `shift()`

The shift method removes and returns the first item from the collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.shift();

// 1

collection.all();

// [2, 3, 4, 5]
```

You may provide number of items to shift. This will return the shifted items in a new collection:
```js
const collection = collect([1, 2, 3, 4, 5]);

collection.shift(2).all();

// [1, 2]

collection.all();

// => [3, 4, 5]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/shift.js)