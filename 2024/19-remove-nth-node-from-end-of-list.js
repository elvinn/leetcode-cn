// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  if (!head) {
    return head;
  }

  const hair = { val: undefined, next: head };
  // 第一个指针先从 hair 开始走 n 步
  let firstNode = hair;
  for (let i = 0; i < n; i++) {
    firstNode = firstNode.next;
  }

  // 快慢指针
  let secondNode = hair;
  while (firstNode.next) {
    secondNode = secondNode.next;
    firstNode = firstNode.next;
  }

  secondNode.next = secondNode.next.next;
  return hair.next;
};