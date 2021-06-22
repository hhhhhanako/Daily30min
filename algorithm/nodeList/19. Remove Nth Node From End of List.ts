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

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   let arr = []
//   let newHead = new ListNode(0, head)
//   let cur = head
//   arr.push(newHead)
//   while (cur) {
//     arr.push(cur)
//     cur = cur.next
//   }
//   let target = arr[arr.length - n]
//   let pre = arr[arr.length - n - 1]
//   pre.next = target.next
//   return newHead.next
// }


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyHead = new ListNode()
  dummyHead.next = head
  let slow = dummyHead
  let fast = dummyHead
  let step = 0
  while (fast) {
    if (step > n) {
      slow = slow.next
    }
    fast = fast.next
    step++
  }
  slow.next = slow.next.next
  return dummyHead.next
};
