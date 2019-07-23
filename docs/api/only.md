# `only()`

The only method returns the items in the collection with the specified keys:

```js
const collection = collect({
  id: 12,
  name: 'John Doe',
  email: 'john@doe.com',
  active: true,
});

const filtered = collection.only(['name', 'email']);

filtered.all();

// { name: 'John Doe', email: 'john@doe.com' }
```

```js
collect([1, 2, 3, 4])
  .only([2, 12])
  .all();

// [2]
```

> For the inverse of `only`, see the `except` method.




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/only.js)