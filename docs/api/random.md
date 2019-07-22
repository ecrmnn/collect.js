# `random()`

The random method returns a random item from the collection:

```js
const collection = collect([1, 2, 3, 4, 5]);

collection.random();

//=> 4 (retrieved randomly)
```

You may optionally pass an integer to random to specify how many items you would like to randomly retrieve. A collection of items is always returned when explicitly passing the number of items you wish to receive:

```js
const random = collection.random(3);

//=> Collection { items: [ 5, 3, 4 ] } (retrieved randomly)

const random = collection.random(1);

//=> Collection { items: [ 3 ] } (retrieved randomly)

random.all();

//=> [3]
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/random.js)