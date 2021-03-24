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
//  Input: head = [1,2,3,4,5]
//  Output: [5,4,3,2,1]

// Input: head = []
// Output: []

// 循环
function reverseList(head: ListNode | null): ListNode | null {
  let ret = null
  while(head) {
    let node = new ListNode(head.val, ret)
    ret = node
    head = head.next
  }
  return ret
};