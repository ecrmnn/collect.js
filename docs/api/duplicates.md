# `duplicates()`

The duplicates method retrieves and returns duplicate values from the collection:

```js
const collection = collect(['a', 'b', 'a', 'c', 'b']);

const duplicates = collection.duplicates();

duplicates.all();

// { 2: 'a', 4: 'b' }
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/duplicates.js)