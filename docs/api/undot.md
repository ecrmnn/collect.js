# `undot()`

The `undot` method expands a single-dimensional collection that uses "dot" notation into a multi-dimensional collection:

```js
const person = collect({
  'name.first_name': 'Marie',
  'name.last_name': 'Valentine',
  'address.line_1': '2992 Eagle Drive',
  'address.line_2': '',
  'address.suburb': 'Detroit',
  'address.state': 'MI',
  'address.postcode': '48219',
});

const undotted = person.undot();

const all = undotted.all();

// {
//   name: {
//       first_name: 'Marie',
//       last_name: 'Valentine',
//   },
//   address: {
//       line_1: '2992 Eagle Drive',
//       line_2: '',
//       suburb: 'Detroit',
//       state: 'MI',
//       postcode: '48219',
//   },
// }
```

[View source on GitHub](https://github.com/ecrmnn/collect.js/blob/master/src/methods/undot.js)
