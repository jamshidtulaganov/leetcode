"use strict";
/*

Given a linked list, swap every two adjacent nodes and return its head.
You must solve the problem without modifying the values in the list's nodes
(i.e., only nodes themselves may be changed.)


Input: head = [1,2,3,4]
Output: [2,1,4,3]

*/
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function swapPairs(head) {
    if (!(head === null || head === void 0 ? void 0 : head.next) || !head) {
        return head;
    }
    let currentNode = head;
    let nextNode = head.next;
    nextNode.next = currentNode;
    console.log(nextNode);
    // while (current) { 
    //    
    //     // swapping
    //     current.next = current;
    //     current.next = temp;
    //     current = current.next.next;
    //     console.log(temp, current);
    // }
    return head;
}
;
const input = {
    val: 1,
    next: {
        val: 2,
        next: null
    }
};
const output = {
    val: 2,
    next: {
        val: 1, next: null
    }
};
console.log(swapPairs(input));
