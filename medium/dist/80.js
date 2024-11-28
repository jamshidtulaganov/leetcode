"use strict";
//remove duplicate if(save 2) with in-place algorithm
//[1,1,1,2,2,3] => [1,1,2,2,3]
function removeDuplicates(nums) {
    if (nums.length <= 2) {
        return 2;
    }
    let index = 2;
    for (let i = 2; i <= nums.length; i++) {
        if (nums[i] !== nums[index - 2]) {
            nums[index] = nums[i];
            index++;
        }
    }
    nums.length = index - 1;
    console.log(nums);
    return index - 1;
}
// Example usage:
let nums = [0, 0, 0, 3, 3];
console.log(removeDuplicates(nums)); // Output: 5
