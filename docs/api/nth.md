# `nth()`

The nth method creates a new collection consisting of every n-th element:

```js
const collection = collect(['a', 'b', 'c', 'd', 'e', 'f']);

const nth = collection.nth(4);

nth.all();

// ['a', 'e']
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/nth.js)