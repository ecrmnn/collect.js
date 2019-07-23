# Usage

### JavaScript

```js
// Using require
const collect = require('collect.js');

collect(products)
  .where('price', '>', 299)
  .sortBy('brand');
```

```js
// Using import
import collect from 'collect.js';

collect(products)
  .where('price', '>', 299)
  .sortBy('brand');
```

### TypeScript

```ts
import collect from 'collect.js';

collect(products)
  .where('price', '>', 299)
  .sortBy('brand');
```