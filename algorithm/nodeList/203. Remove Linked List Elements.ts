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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let node = new ListNode(null)
  const newHead = node
  let cur = head
  while (cur) {
    if (cur.val !== val) {
      node.next = new ListNode(cur.val, null)
      node = node.next
    }
    cur = cur.next
  }
  return newHead.next
}
