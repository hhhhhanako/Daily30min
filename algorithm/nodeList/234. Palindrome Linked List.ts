// Input: head = [1,2,2,1]
// Output: true

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

 function isPalindrome(head: ListNode | null): boolean {
  let reverse = (pre, cur) => {
      if(!cur) return pre
      let tmp = cur.next
      cur.next = pre 
      return reverse(cur, tmp)
  }
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let slow = dummyHead
  let fast = dummyHead
  while(fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
  }
  let next = slow.next
  slow.next = null
  let newHead = reverse(null, next)
  for(let p = head, q = newHead; q!== null ;p = p.next,q=q.next){
      if(p.val != q.val) return false
  }
  return true
};