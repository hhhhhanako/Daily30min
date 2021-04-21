function swapPairs(head: ListNode | null): ListNode | null {
  let newHead = new ListNode(0)
  let cur = head
  let pre = newHead
  let after, after2
  while(cur && cur.next) {
      after = cur.next
      after2 = after.next
      pre.next = after
      after.next = cur
      pre = cur
      cur = after2
  }
  pre.next = cur
  return newHead.next
};