"use strict";
/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

*/
// 1-solve
// function removeDuplicates(nums) {
//     nums = Array.from(new Set(nums));
//     console.log(nums);
//     return nums.length;
// }
// const a = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// console.log(a);
// 2-solve (In-place algorithm)
/*
    [1, 1, 2] => 2

    indexes
    0 -> 2
    2 -> 1
    1 -> 0
    0,0,1,1,1,2,2,3,3,4 - >

    left = 0
    right = 1;

    0 -> 0 true -> 1 === 2 ? right++  : [1] = [2] => [0, 1, 0, 0, 1, 2]
    1 -> 1 true -> [1] === [2] ? right ++ : [2] = [right] [0,1,2];

    if(right > arr.length) return false;
*/
// function removeDuplicates(nums: number[]): number {
//     if (nums.length === 0) {
//         return 0;
//     }
//     let left = 0; // Pointer for unique elements
//     let right = 1; // Pointer to iterate through the array
//     while (right < nums.length) {
//         if (nums[left] === nums[right]) {
//             // Found a duplicate, skip it
//             right++;
//         } else {
//             // Found a new unique element, move it to the left pointer position
//             left++;
//             nums[left] = nums[right]; // Move the unique element to the left
//             right++; // Move the right pointer to the next element
//         }
//     }
//     // The unique elements are up to index `left`
//     nums.length = left + 1; // Trim the array to remove duplicates
//     return left + 1; // Return the length of the array with unique elements
// }
// const a = removeDuplicates([0, 1]);
// console.log(a);
// 3-solve
function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let index = 0; // Pointer for unique elements
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[index]) {
            index++;
            nums[index] = nums[i]; // Move the unique element to the correct position
        }
    }
    console.log(nums);
    return index + 1; // Return the length of the array with unique elements
}
console.log(removeDuplicates([1, 1, 1, 2]));
