// https://leetcode.cn/problems/merge-two-sorted-lists/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  const hair = { val: undefined, next: undefined };
  let node1 = list1;
  let node2 = list2;
  let current = hair;
  while (node1 && node2) {
    if (node1.val <= node2.val) {
      current.next = node1;
      node1 = node1.next;
    } else {
      current.next = node2;
      node2 = node2.next;
    }

    current = current.next;
  }

  current.next = node1 ? node1 : node2;
  return hair.next;
};
