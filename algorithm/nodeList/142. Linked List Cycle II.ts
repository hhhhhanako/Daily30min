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

function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head
  while (fast) {
    if (!fast.next) return null
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) {
      fast = head
      while (true) {
        if (fast == slow) {
          return slow
        }
        fast = fast.next
        slow = slow.next
      }

    }
  }
  return null
};