# `when()`

The when method will execute the given callback when the first argument given to the method evaluates to true:

```js
const collection = collect([1, 2, 3]);

collection.when(true, items => items.push(4));

collection.all();

// [1, 2, 3, 4]
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/when.js)