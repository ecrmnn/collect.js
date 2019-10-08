# `transform()`

The transform method iterates over the collection and calls the given callback with each item in the collection. The items in the collection will be replaced by the values returned by the callback:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.transform((item, key) => item * 2);

collection.all();

// [2, 4, 6, 8, 10]
```

> Unlike most other collection methods, `transform` modifies the collection itself. If you wish to create a new collection instead, use the `map` method.

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/transform.js)