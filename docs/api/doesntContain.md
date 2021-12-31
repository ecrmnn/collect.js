# `doesntContain()`

The `doesntContain` method determines whether the collection does not contain a given item. You may pass a closure to the `doesntContain` method to determine if an element does not exist in the collection matching a given truth test:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.doesntContain(value => value < 5);

// false
```

```js
const collection = collect([1, 2, 3]);

collection.doesntContain(4);
// true
```

You may also use `doesntContain` on object based collections:

```js
const collection = collect({
  name: 'Mohamed Salah',
  number: 11,
});

collection.doesntContain('Mohamed Salah');
// false

collection.doesntContain('Sadio Mané');
// true
```

You may also pass a key / value pair to the contains method, which will determine if the given pair exists in the collection:

```js
const collection = collect({
  name: 'Mohamed Salah',
  number: 11,
});

collection.doesntContain('name', 'Sadio Mané');
// true
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/doesntContain.js)