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

function hasCycle(head: ListNode | null): boolean {
    let lo = head;
    let hi = head;

    while (hi && hi.next) {
        lo = lo.next
        hi = hi.next.next;
        if (lo == hi) {
            return true
        }
    }

    return false
};
