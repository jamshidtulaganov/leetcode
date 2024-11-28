"use strict";
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left <= right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        console.log(area);
        max = Math.max(max, area);
        if (Math.max(height[left], height[right]) === height[left]) {
            right--;
        }
        else {
            left++;
        }
    }
    return max;
    // maxArea = minHeight * distance
}
console.log(maxArea([1, 1]));
