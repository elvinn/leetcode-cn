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
var reverseList = function (head) {
  if (!head) {
    return null;
  }

  /* ---------------------------------- 递归方法 ---------------------------------- */
  // // 仅一个节点时
  // if (!head.next) {
  //   return head;
  // }

  // // 普遍情况：开启递归
  // const next = head.next;
  // const result = reverseList(next);
  // next.next = head;
  // head.next = null;

  // return result;

  /* ---------------------------------- 迭代方法 ---------------------------------- */
  let prev = null;
  let cur = head;
  let next;

  while (cur) {
    // 临时保存下一个节点
    next = cur.next;
    // 将当前节点指向上一个节点
    cur.next = prev;
    // prev, cur 均平移到下一个节点
    prev = cur;
    cur = next;
  }

  return prev;
};
