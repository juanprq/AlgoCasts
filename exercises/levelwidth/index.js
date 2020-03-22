// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const STOP = 'STOP';
function levelWidth(root) {
  let holder = [root, STOP];
  const levelCounter = [0];

  while(holder.length) {
    const [head, ...rest] = holder;

    if (head === STOP && !rest.length) {
      holder = [...rest];
    } else if (head === STOP) {
      levelCounter.push(0);
      holder = [...rest, STOP];
    } else {
      holder = [...rest, ...head.children];
      levelCounter[levelCounter.length - 1] = levelCounter[levelCounter.length - 1] + 1;
    }
  }

  return levelCounter;
}

module.exports = levelWidth;
