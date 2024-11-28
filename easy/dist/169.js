"use strict";
//#easy/169-problem
// The majority element is the element that appears more than ⌊n / 2⌋ times.
//  You may assume that the majority element always exists in the array.
// input: [3,2,3]
// output: 3
//#########  time - O(2*n) space O(2*n)
// function majorityElement(nums: number[]): number {
//     const sortedNums = nums.sort((a, b) => a - b);
//     let count = 1;
//     let element = sortedNums[0];
//     for (let i = 0; i <= sortedNums.length - 1; i++) {
//         if (sortedNums[i] === sortedNums[i + 1] && sortedNums[i + 1]) {
//             count++;
//             if (count > nums.length / 2) {
//                 element = sortedNums[i];
//             }
//         } else {
//             count = 1;
//         }
//     }
//     return element;
// };
function majorityElement(nums) {
    let count = 0;
    let candidate = null;
    // Phase 1: Find the candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    console.log(candidate);
    // Phase 2: Verify the candidate
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    }
    else {
        throw new Error("No majority element found");
    }
}
const input = [2, 2, 1, 1, 1, 2, 2];
const output = majorityElement(input);
console.log(output);
