/* 

Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes 
(i.e., only nodes themselves may be changed.)


Input: head = [1,2,3,4]
Output: [2,1,4,3]

*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface IListNode {
    val: number;
    next: IListNode | null;
}

class ListNode implements IListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function swapPairs(head: ListNode | null): ListNode | null {

    if (!head?.next || !head) { 
        return head
    }

    let currentNode: ListNode | null = head;
    let nextNode: ListNode | null = head.next;

    nextNode.next = currentNode

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
};


const input = {
    val: 1,
    next: {
        val: 2,
        next: null
    }
}

const output = {
    val: 2, 
    next: {
        val: 1, next: null
    }
}


console.log(swapPairs(input));