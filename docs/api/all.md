# `all()`

The all method returns the underlying array or object represented by the collection:

```js
collect([1, 2, 3]).all();

// [1, 2, 3]
```

```js
collect({
  firstname: 'Darwin',
  lastname: 'Núñez',
}).all();

// {
//   firstname: 'Darwin',
//   lastname: 'Núñez',
// }
```


[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/all.js)
