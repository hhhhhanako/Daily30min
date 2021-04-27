// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let pre = null
  let cur = head
  let p = head
  for (let i = 0; i < k; i++) {
    if (p == null) return head
    p = p.next
  }
  for (let i = 0; i < k; i++) {
    let tmp = cur.next
    cur.next = pre
    pre = cur
    cur = tmp
  }
  head.next = reverseKGroup(cur, k)
  return pre
}
