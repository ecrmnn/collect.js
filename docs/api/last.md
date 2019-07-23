# `last()`

The last method returns the last element in the collection that passes a given truth test:

```js
const collection = collect([1, 2, 3]);

const last = collection.last(item => item > 1);

// 3
```

You may also call the last method with no arguments to get the last element in the collection. If the collection is empty, `null` is returned:

```js
collect([1, 2, 3, 4]).last();

// 4
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/last.js)