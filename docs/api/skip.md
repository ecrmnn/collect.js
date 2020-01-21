# `skip()`

The skip method returns a new collection, without the first given amount of items:

```js
const collection = collect([1, 2, 3, 4, 5, 6]);

collection.skip(4).all();

// [5, 6]
```

```js
const collection = collect({
  first: 'first',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
  fifth: 'fifth',
});

collection.skip(4).all();

// { fifth: 'fifth' }
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/skip.js)
