
  // Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

//  Input: l1 = [2,4,3], l2 = [5,6,4]
//  Output: [7,0,8]
 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let cnt = 0
  let sum = 0
  let head = new ListNode(0)
  let p = head
  while(l1 || l2) {
     sum = (l1 === null? 0 : l1.val) + (l2 === null? 0 : l2.val) + cnt
     cnt = sum >= 10 ? 1 : 0
     p.next = new ListNode(sum % 10)
     p = p.next
     l1 = l1 === null? null : l1.next
     l2 = l2 === null? null : l2.next
   }
   if (cnt > 0) {
     p.next = new ListNode(cnt)
   }
   return head.next
};