// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

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
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let arr = []
  let newHead = new ListNode(0, head)
  let cur = head
  arr.push(newHead)
  while (cur) {
    arr.push(cur)
    cur = cur.next
  }
  let target = arr[arr.length - n]
  let pre = arr[arr.length - n - 1]
  pre.next = target.next
  return newHead.next
}

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   let newHead = new ListNode(0,head)
//   let cur = head
//   let step = 1
//   let target = newHead
//   while(cur.next) {
//     if(step >= n) target = target.next
//     cur = cur.next
//     step++
//   }
//   target.next = target.next.next
//   return newHead.next
// };
