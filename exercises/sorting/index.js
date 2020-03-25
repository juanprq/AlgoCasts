// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }

    if (minIndex !== i) {
      const aux = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = aux;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = [...arr].splice(0, middle);
  const right = [...arr].splice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  if (!left.length) return right;
  if (!right.length) return left;

  const [lHead, ...lRest] = left;
  const [rHead, ...rRest] = right;

  if (lHead < rHead) {
    return [lHead, ...merge(lRest, right)];
  }
  return [rHead, ...merge(left, rRest)];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
