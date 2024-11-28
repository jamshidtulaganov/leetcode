// function subsets(nums: number[]): number[][] {
    
// 	let result = [[]];
    
	
// 	let left = -1;
// 	let right = 0;
// 	let subs: number[] = [];
	
// 	function separateSubs(left: number, right: number) {
		
// 		let sub: number[] = []		
		
// 		if(left !== -1) {
// 			sub = nums.slice(0, left)
// 			subs.push(sub)
// 		}
		
// 		if (left >= right && left === nums.length - 1) {
//             // 
//             console.log(subs)
// 		} else {
			
// 			while (left < right) {
				
// 				sub[left+1] = nums[right]
// 				subs.push(sub)
// 				right++
// 			}
			
// 		}
//     }
    
//     separateSubs(left, right)
// };
