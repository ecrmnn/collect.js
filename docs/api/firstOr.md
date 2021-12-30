#### `firstOr()`

The firstOr method returns the first element in the collection or the default value:

```js
collect().firstOr(5);

// 5
```

```js
collect([1, 2, 3, 4]).firstOr(5);

// 1
```

You may also supply a callback as the default value:

```js
collect().firstOr(() => {
  throw new Error('...');
});
```
