/*

Given the head of a sorted linked list, 
delete all duplicates such that each element appears only once. 
Return the linked list sorted as well.

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


/*

prev

head

*/

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let current: ListNode | null = head;

    while (current) {

        if (current.val === current.next?.val) {
            current.next = current.next.next;
        } else { 
            current = current.next;
        }
    }

    return head;    
};


const head = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next:  { 
                        val: 4,
                        next: null
                    }
                }
            }
        }
    }
};

console.log(deleteDuplicates(head))