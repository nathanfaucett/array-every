var tape = require("tape"),
    arrayEvery = require("..");


tape("arrayEvery(array, callback) tests whether all elements in the array pass the test implemented by the provided function", function(assert) {

    function fn(value, index) {
        return value === index;
    }

    assert.equals(arrayEvery([0, 1, 2, 3, 4], fn), true);
    assert.equals(arrayEvery([1, 1, 2, 3, 4], fn), false);

    assert.end();
});
