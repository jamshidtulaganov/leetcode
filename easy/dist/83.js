"use strict";
/*

Given the head of a sorted linked list,
delete all duplicates such that each element appears only once.
Return the linked list sorted as well.

*/
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
/*

prev

head

*/
function deleteDuplicates(head) {
    var _a;
    if (!head)
        return null;
    let current = head;
    while (current) {
        if (current.val === ((_a = current.next) === null || _a === void 0 ? void 0 : _a.val)) {
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }
    return head;
}
;
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
                    next: {
                        val: 4,
                        next: null
                    }
                }
            }
        }
    }
};
console.log(deleteDuplicates(head));
