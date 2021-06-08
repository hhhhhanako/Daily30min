function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null
  let pa = headA, pb = headB
  while (pa || pb) {
    if (!pa) pa = headB
    if (!pb) pb = headA
    if (pa === pb) {
      return pa
    }
    pa = pa.next
    pb = pb.next
  }
  return null
};