"use strict";
/*
You are given an integer array nums.
You are initially positioned at the array's first index,
and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.


Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

*/
function canJump(nums) {
    for (let jumpIndex = 0; jumpIndex < nums.length;) {
        console.log(jumpIndex);
        // reach the the last index
        if (jumpIndex >= nums.length - 1) {
            return true;
        }
        let maxStep = getMaxStep(nums, jumpIndex, nums[jumpIndex]);
        // increase jumpIndex by maxStep
        if (typeof maxStep !== "number") {
            return false;
        }
        else {
            let increasedIdx = jumpIndex + maxStep;
            console.log("max_step ->", maxStep);
            if (increasedIdx >= nums.length - 1) {
                return true;
            }
            else if (nums[increasedIdx] === 0) {
                return false;
            }
            else {
                jumpIndex += maxStep;
            }
        }
    }
    function getMaxStep(arr, jumpIndex, maxJumpValue) {
        // #1 if (arr[maxJumpValue] === 0) maxJumpValue decrease
        // else return this value
        for (let i = maxJumpValue; i > jumpIndex;) {
            let condition_one = arr[i] && arr[i] === 0;
            let condition_two = arr[i - 1] && (arr[i] < arr[i - 1]);
            let condition_three = arr[jumpIndex + i] === 0;
            let condition_four = i === 0;
            if (condition_one && !condition_two) {
                i--;
            }
            else if (condition_two && !condition_three) {
                i--;
            }
            else if (condition_three && !condition_four) {
                i--;
            }
            else if (condition_four) {
                return false;
            }
            else {
                return i;
            }
        }
        return maxJumpValue;
    }
    return false;
}
;
let nums_test = [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0];
console.log(canJump(nums_test));
