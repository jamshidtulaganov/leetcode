/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */


var fn = (x) => { console.log("x => ", x) };
var args = [4]
var t = 35
var cancelTimeMs = 190

var cancellable = function (fn, args, t) {
    fn(...args)

    const id = setInterval(fn(...args), t)

    function cancelFn() {
        clearInterval(id)
    }

    return cancelFn
};

const cancelFn = cancellable(fn, args, t);
setTimeout(cancelFn, cancelTimeMs);
