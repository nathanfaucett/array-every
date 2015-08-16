module.exports = arrayEvery;


function arrayEvery(array, callback) {
    var i = -1,
        il = array.length - 1;

    while (i++ < il) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }

    return true;
}
