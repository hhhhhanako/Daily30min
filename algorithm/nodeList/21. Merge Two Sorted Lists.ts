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

//  Input: l1 = [1,2,4], l2 = [1,3,4]
//  Output: [1,1,2,3,4,4]

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head = new ListNode()
  let cur = head
  let p1 = l1
  let p2 = l2
  while(p1 && p2){
    if(p1.val < p2.val) {
      cur.next = p1
      p1 = p1.next
    } else {
      cur.next = p2
      p2 = p2.next  
    }
    cur = cur.next
  }
  if(p1) cur.next = p1
  if(p2) cur.next = p2
  return head.next
};