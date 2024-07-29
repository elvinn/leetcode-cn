// https://leetcode.cn/problems/reverse-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let pre = null;
  let current = head;
  let temp = null;
  while (current) {
    temp = current.next;
    // 翻转
    current.next = pre;
    // 向后移动一位
    pre = current;
    current = temp;
  }

  return pre;
};
