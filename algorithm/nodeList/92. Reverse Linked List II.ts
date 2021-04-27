// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let index = 1
  let cur = head
  let node1,
    node2,
    node3,
    node4 = null,
    pre = null,
    ret
  while (cur) {
    if (index < left) {
      node1 = cur
      cur = cur.next
    } else if (index >= left && index <= right) {
      index === left && (node2 = cur)
      let tmp = cur.next
      cur.next = pre
      node3 = cur
      pre = cur
      cur = tmp
    } else {
      node4 = cur
      break
    }
    index++
  }
  node2.next = node4
  if (!!node1) {
    node1.next = node3
    ret = head
  } else {
    ret = node3
  }
  return ret
}
