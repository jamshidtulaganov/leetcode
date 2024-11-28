/*
Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. 
fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

*/



/**
 * @param {Function} fn - The function to be wrapped
 * @param {number} t - The time limit in milliseconds
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        // Create a timeout promise that rejects after `t` milliseconds
        // const timeout = 

        return Promise.race([
            fn(...args),
            new Promise((_, rej) =>
                setTimeout(() => rej("Time Limit Exceeded"), t)
            )
        ]);
    };
};


const limited = timeLimit(
    (t) => new Promise((res) => setTimeout(() => res("Completed"), t)),
    100 // Time limit: 100ms
);


limited(40)
    .then(console.log) // Won't be called
    .catch(console.log); // Output: "Time Limit Exceeded"

