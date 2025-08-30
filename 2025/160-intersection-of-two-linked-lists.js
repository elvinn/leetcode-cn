// https://leetcode.cn/problems/intersection-of-two-linked-lists/description/?envType=study-plan-v2&envId=top-100-liked

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }

  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    if (pA === null) {
      pA = headB;
    } else {
      pA = pA.next;
    }

    if (pB === null) {
      pB = headA;
    } else {
      pB = pB.next;
    }
  }

  return pA;
};