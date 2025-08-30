// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/?envType=study-plan-v2&envId=top-100-liked

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
var removeNthFromEnd = function(head, n) {
  let count = 1;
  let curr = head;
  while(curr.next) {
    count += 1;
    curr = curr.next;
  }

  let aim = count - n;
  if (aim === 0) {
    // 特殊情况，删除头节点
    return head.next; 
  }

  curr = head;
  for (let i = 0; i < aim - 1; i++) {
    curr = curr.next;
  }

  curr.next = curr.next.next;
  return head;
};