/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function calculateDiff(node, currentMin, currentMax) {
  //If no value in node, return diff as 0
  if (!node) return 0;

  // Compare node to stored min/maax values and swap if necesarry
  const maxValue = Math.max(node.val, currentMax);
  const minValue = Math.min(node.val, currentMin);

  // Return max diff of current min/max and future results
  return Math.max(
    Math.abs(maxValue - minValue),
    calculateDiff(node.left, minValue, maxValue),
    calculateDiff(node.right, minValue, maxValue)
  );
}

var maxAncestorDiff = function (root) {
  return calculateDiff(root, root.val, root.val);
};
