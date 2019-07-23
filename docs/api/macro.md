# `macro()`

The macro method lets you register custom methods

```js
collect().macro('uppercase', function () {
  return this.map(item => item.toUpperCase());
});

const collection = collect(['a', 'b', 'c']);

collection.uppercase();

collection.all();

// ['A', 'B', 'C']
```

> Note that the `macro` method returns `undefined`, and therefore it is not possible to use it within a chain of methods.




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/macro.js)