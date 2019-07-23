# `pad()`

The pad method will fill the array with the given value until the array reaches the specified size. This method
behaves like the [array_pad](https://secure.php.net/manual/en/function.array-pad.php) PHP function.

To pad to the left, you should specify a negative size. No padding will take place if the absolute value of the given size is less than or equal to the length of the array:

```js
const collection = collect(['A', 'B', 'C']);

let filtered = collection.pad(5, 0);

filtered.all();

// ['A', 'B', 'C', 0, 0]

filtered = collection.pad(-5, 0);

filtered.all();

// [0, 0, 'A', 'B', 'C']
```




[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/pad.js)