#### `sole()`

The sole method returns the first element in the collection that passes a given truth test, but only if the truth test matches exactly one element:

```js
collect([1, 2, 3, 4]).sole(item => item === 1);

// 1
```

If there are no elements in the collection that should be returned by the sole method, then an error will be thrown:

```js
collect([1, 2, 3, 4]).sole(item => item > 4);

// Error ("Item not found.") is thrown.
```

If there are multiple elements in the collection that should be returned by the sole method, then an error will be thrown:

```js
collect([1, 2, 3, 4]).sole();

// Error ("Multiple items found.") is thrown.
```
