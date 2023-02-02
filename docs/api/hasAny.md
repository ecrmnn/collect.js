# `hasAny()`

The hasAny method determines whether one or more of the given keys exist in the collection:

```js
const collection = collect({
  animal: 'unicorn',
  ability: 'magical',
});

collection.hasAny('ability');

// true

collection.hasAny(['animal', 'ability']);

// true

collection.hasAny(['animal', 'ability', 'name']);

// true

collection.hasAny(['name']);

// false
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/hasAny.js)