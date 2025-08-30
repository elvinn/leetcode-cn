// https://leetcode.cn/problems/add-two-numbers/?envType=study-plan-v2&envId=top-100-liked

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let prehead = new ListNode(-1);
  
  let curr = prehead;
  let sum;
  let addOne = false;

  while (l1 || l2) {
    sum = (l1?.val || 0) + (l2?.val || 0) + (addOne ? 1: 0);
    const newNode = new ListNode();
    if (sum >= 10) {
      newNode.val = sum - 10;
      addOne = true;
    } else {
      newNode.val = sum;
      addOne = false;
    }

    // l1 l2 移动到下一个节点
    l1 = l1?.next;
    l2 = l2?.next;

    // 将新的节点接到链上
    curr.next = newNode;
    curr = newNode;
  }

  // 可能还需要新增一个节点 1
  if (addOne) {
    curr.next = new ListNode(1);
  }

  return prehead.next;
};