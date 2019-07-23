# `reduce()`

The reduce method reduces the collection to a single value, passing the result of each iteration into the subsequent iteration:

```js
const collection = collect([1, 2, 3]);

const total = collection.reduce((carry, item) => carry + item);

// 6
```

The value for `carry` on the first iteration is null; however, you may specify its initial value by passing a second argument to reduce:

```js
const total = collection.reduce((carry, item) => carry + item, 4);

// 10
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/reduce.js)