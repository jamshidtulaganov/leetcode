/**
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds.
Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
 */


var TimeLimitedCache = function () {
    this.cache = new Map(); // Use a Map to store key-value pairs and expiration times
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const now = Date.now();
    const expiresAt = now + duration;

    const exists = this.cache.has(key) && this.cache.get(key).expiresAt > now;

    this.cache.set(key, { value, expiresAt });

    return exists;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const now = Date.now();

    if (this.cache.has(key)) {
        const entry = this.cache.get(key);

        if (entry.expiresAt > now) {
            return entry.value;
        } else {
            this.cache.delete(key); // Remove expired keys
        }
    }

    return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    const now = Date.now();

    let count = 0;

    for (const [key, entry] of this.cache) {
        if (entry.expiresAt > now) {
            count++;
        } else {
            this.cache.delete(key); // Cleanup expired keys
        }
    }

    return count;
};


const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 50); // false

console.log(Date.now())