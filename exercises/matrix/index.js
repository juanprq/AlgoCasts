// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const fillEmptyMatrix = (n) => {
  const result = [];

  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      result[i][j] = ' ';
    }
  }

  return result;
};

const buildGetNextNumber = initial => {
  let start = initial;

  return () => {
    const toReturn = start;

    start += 1;
    return toReturn;
  }
};

function matrix(n) {
  const resultingMatrix = fillEmptyMatrix(n);
  const getNextNumber = buildGetNextNumber(1);

  // initialize variables
  let initRow = 0;
  let initCol = 0;
  let endRow = n - 1;
  let endCol = n - 1;

  while (initRow <= endRow && initCol <= endCol) {
    for (let i = initCol; i <= endCol; i++) {
      resultingMatrix[initRow][i] = getNextNumber();
    }
    initRow += 1;

    for (let i = initRow; i <= endRow; i++) {
      resultingMatrix[i][endCol] = getNextNumber();
    }
    endCol -= 1;

    for (let i = endCol; i >= initCol; i--) {
      resultingMatrix[endRow][i] = getNextNumber();
    }
    endRow -=1;

    for (let i = endRow; i >= initRow; i--) {
      resultingMatrix[i][initCol] = getNextNumber();
    }
    initCol += 1;
  }

  return resultingMatrix;
}

module.exports = matrix;
