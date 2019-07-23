# `times()`

The times method creates a new collection by invoking the callback a given amount of times:

```js
const collection = collect().times(10, number => number * 9);

collection.all();

// [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/times.js)