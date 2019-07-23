# `slice()`

The slice method returns a slice of the collection starting at the given index:

```js
const collection = collect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const slice = collection.slice(4);

slice.all();

// [5, 6, 7, 8, 9, 10]
```

If you would like to limit the size of the returned slice, pass the desired size as the second argument to the method:

```js
const slice = collection.slice(4, 2);

slice.all();

// [5, 6]
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/slice.js)