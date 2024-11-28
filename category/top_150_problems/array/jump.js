// You are given an integer array nums.
//You are initially positioned at the array's first index,
//and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

var canJump = function (nums) {
	let isLastItem = false;
	let index = 0;
	let maxJumpIndex = 0;

	while (index < nums.length) {
		console.log(index);
		if (index === 0 && nums[index] === 0) {
			return (isLastItem = false);
		}

		if (findMaxStep(nums, index) === index) {
			return (isLastItem = false);
		} else {
			index = findMaxStep(nums, index);
		}

		if (index >= nums.length) {
			return (isLastItem = true);
		}
	}

	return isLastItem;
};

function findMaxStep(nums, index) {
	for (let i = index; i < nums.length; ) {
		if (nums[index] === 0) {
			i--;
		}
	}
}

let nums = [3, 2, 1, 0, 4];

console.log(canJump(nums));
