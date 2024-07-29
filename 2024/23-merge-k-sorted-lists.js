// https://leetcode.cn/problems/merge-k-sorted-lists/description/

const mergeTwoLists = (nodeA, nodeB) => {
  if (!nodeA) {
    return nodeB;
  }

  if (!nodeB) {
    return nodeA;
  }

  const head = {
    val: 0,
    next: null,
  };

  let tail = head;


  while (nodeA && nodeB) {
    if (nodeA.val <= nodeB.val) {
      tail.next = nodeA;
      nodeA = nodeA.next;
    } else {
      tail.next = nodeB;
      nodeB = nodeB.next;
    }

    tail = tail.next;
  }

  tail.next = nodeA || nodeB;
  return head.next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
  const merge = (left, right) => {
    if (left === right) {
      return lists[left];
    }

    if (left > right) {
      return  null;
    }

    const mid = Math.floor((left + right) / 2);

    return mergeTwoLists(merge(left, mid), merge(mid + 1, right));
  };

  return merge(0, lists.length - 1)
};