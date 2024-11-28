"use strict";
/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/
function longestCommonPrefix(strs) {
    let prefix = "";
    // #1 iterate strs
    // #2 check index with item
    let smallestStr = strs[0];
    let isBreak = false;
    for (const str of strs) {
        if (str.length < smallestStr.length) {
            smallestStr = str;
        }
    }
    const checkPrefix = (str, char, idx) => char === str[idx];
    for (let i = 0; i < smallestStr.length; i++) {
        if (isBreak)
            return prefix;
        for (const [index, str] of strs.entries()) {
            if (!checkPrefix(str, smallestStr[i], i)) {
                isBreak = true;
                break;
            }
            if (index === strs.length - 1) {
                prefix += smallestStr[i];
            }
        }
    }
    return prefix;
}
;
const arr = ["cir", "car"];
const outputFunc = longestCommonPrefix(arr);
console.log(outputFunc);
