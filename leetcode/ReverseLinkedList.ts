function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;

    while (head) {
        let curr = head.next;
        head.next = prev;
        prev = head;
        head = curr;
    }

    return prev;
}
