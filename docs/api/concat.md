# `concat()`

The concat method is used to merge two or more collections/arrays/objects:

_You can also `concat()` an array of objects, or a multidimensional array_

```js
const collection = collect([1, 2, 3]);

let concatenated = collection.concat(['a', 'b', 'c']);

concatenated = concatenated.concat({
  name: 'Steven Gerrard',
  number: 8,
});

concatenated.all();

// [1, 2, 3, 'a', 'b', 'c', 'Steven Gerrard', 8]
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/concat.js)