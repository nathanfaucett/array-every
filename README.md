array-every
=======

tests whether all elements in the array pass the test implemented by the provided function.


```javascript
var arrayEvery = require("@nathanfaucett/array-every");


var isTrue = arrayEvery([2, 4, 6], function isDivisibleBy2(value, index, array) {
    return value % 2 === 0;
});
```
