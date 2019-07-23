# `get()`

The get method returns the item at a given key or index. If the key or index does not exist, `null` is returned:

```js
const collection = collect({
  firstname: 'Chuck',
  lastname: 'Norris',
});

collection.get('lastname');

// Norris

collection.get('middlename');

// null
```

```js
const collection = collect(['a', 'b', 'c']);

collection.get(1);

// b
```

You may optionally pass a default value as the second argument:

```js
const collection = collect({
  firstname: 'Chuck',
  lastname: 'Norris',
});

collection.get('middlename', 'default-value');
// default-value
```

You may even pass a callback as the default value. The result of the callback will be returned if the specified key does not exist:

```js
const collection = collect({
  firstname: 'Chuck',
  lastname: 'Norris',
});

collection.get('middlename', () => 'default-value');

// default-value
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/get.js)