// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const valueInRange = (value, min, max) => {
  if (min === null && max === null) return true;
  if (min === null) return value <= max;
  if (max === null) return value >= min;

  return min <= value && value <= max;
}

function validate(node, min = null, max = null) {
  if (node === null) {
    return true;
  }

  return valueInRange(node.data, min, max)
    && validate(node.left, min, node.data)
    && validate(node.right, node.data, max);
}

module.exports = validate;
