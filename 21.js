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
  let node = { next: null };
  let previousNode = null;
  let firstNode = null;
  while (list1 !== null && list2 !== null) {
    node = new ListNode();
    if (list1.val < list2.val) {
      node.val = list1.val;
      if (list1.next === null) list1 = null;
      else list1 = list1.next;
    } else {
      node.val = list2.val;
      if (list2.next === null) list2 = null;
      else list2 = list2.next;
    }

    if (previousNode !== null) previousNode.next = node;
    previousNode = node;
    if (firstNode === null) firstNode = node;
  }

  while (list1 !== null) {
    node = new ListNode();
    node.val = list1.val;
    if (list1.next === null) list1 = null;
    else list1 = list1.next;

    if (previousNode !== null) previousNode.next = node;
    previousNode = node;
    if (firstNode === null) firstNode = node;
  }

  while (list2 !== null) {
    node = new ListNode();
    node.val = list2.val;
    if (list2.next === null) list2 = null;
    else list2 = list2.next;

    if (previousNode !== null) previousNode.next = node;
    previousNode = node;
    if (firstNode === null) firstNode = node;
  }

  return firstNode;
};
