/* 
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list.
The list should be made by splicing together the nodes of the first two lists.


Return the head of the merged linked list.

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

// class ListNode implements IListNode {
//     val: number;
//     next: ListNode | null;

//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) {
        return null
    }
    
    if (!list1) {
        return list2
    }

    if (!list2) {
        return list1
    }


    let resultNode: ListNode | null = null; 

    while (list1 || list2) { 
        if (list1 && list2 && list1.val >= list2.val) {
            addNode(list2.val);
            list2 = list2.next
        } 

        if (list1 && !list2) {
            addNode(list1.val)
            list1 = list1.next
        }

        if (!list1 && list2) { 
            addNode(list2.val)
            list2 = list2.next
        }

        if (list1 && list2 && list1.val < list2.val) { 
            addNode(list1.val);
            list1 = list1.next
        }
    }    


    function addNode(val: number) { 
        const newNode = {
            val,
            next: null
        }

        if (!resultNode) {
            resultNode = newNode
        } else { 
            
            let current: ListNode | null = resultNode

            while (current.next) {
                current = current.next
            }

            current.next = newNode;
        }

    }

    return resultNode;
};

// best way

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

//     if (!list1) return list2
//     if (!list2) return list1

//     if (list1.val < list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2)
//         return list1
//     } else {
//         list2.next = mergeTwoLists(list2.next, list1)
//         return list2
//     }

// };

const list1 = {
    val: 1,
    next: null
}


const list2 = {
    val: 2,
    next: null
}

console.log(mergeTwoLists(list1, list2));