function hasCycle(head: ListNode | null): boolean {
    if(!head || !head.next) return false
    let slow = head
    let fast = head.next.next
    while(slow !== fast){
      if(!fast || !fast.next) return false
      slow = slow.next
      fast = fast.next.next
    }
    return true
};