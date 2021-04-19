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
  let pre = null
  let cur = head
  while(cur) {
    let tmp = cur.next
    cur.next = pre
    pre = cur
    cur = tmp
  }
  return pre
};
// 递归
function reverseListRecursion(head: ListNode | null): ListNode | null {
  let reverse = (pre, cur) => {
    if(!cur) return pre
    let tmp = cur.next
    cur.next = pre
    return reverse(cur,tmp)
  }
  return reverse(null, head)
};
