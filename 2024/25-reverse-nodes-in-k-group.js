// https://leetcode.cn/problems/reverse-nodes-in-k-group/description/

const reverse = (head, tail) => {
  if (!head) {
    return;
  }

  let pre = tail.next;
  let current = head;
  let temp;

  // key point: 关注终止条件
  while (pre !== tail) {
    temp = current.next;
    current.next = pre;
    pre = current;
    current = temp;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const hair = { val: undefined, next: head };

  let pre = hair
  while (head) {
    let tail = pre;

    for (let i = 0; i < k; i++) {
      tail = tail.next;

      if (!tail) {
        // 最后不足 k 个元素，无需翻转
        return hair.next;
      }
    }

    reverse(head, tail);
    pre.next = tail;

    pre = head;
    head = pre.next;
  }

  return hair.next;
};
