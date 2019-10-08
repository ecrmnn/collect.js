### Strictness and comparisons

All comparisons in `collect.js` are done using strict equality. Using loose equality comparisons are generally frowned upon in JavaScript. Laravel only performs "loose" comparisons by default and offer several "strict" comparison methods. These methods have not been implemented in `collect.js` because all methods are strict by default.