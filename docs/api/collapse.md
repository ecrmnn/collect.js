# `collapse()`

The collapse method collapses a collection of arrays into a single, flat collection:

```js
const collection = collect([[1], [{}, 5, {}], ['xoxo']]);

const collapsed = collection.collapse();

collapsed.all();

// [1, {}, 5, {}, 'xoxo']
```

```js
const collection = collect([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

const collapsed = collection.collapse();

collapsed.all();

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/collapse.js)