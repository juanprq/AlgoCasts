// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

// function pyramid(n) {
//   const matrix = [];
//   const columns = n * 2 - 1;

//   for (let i = 0; i < n; i++) {
//     matrix[i] = [];

//     for (let j = 0; j < columns; j++) {
//       const pivot = Math.floor(columns / 2);
//       if (j >= pivot - i && j <= pivot + i) {
//         matrix[i][j] = '#';
//       } else {
//         matrix[i][j] = ' ';
//       }
//     }
//   }

//   matrix.map(row => console.log(row.join('')));
// }

const pyramid = (n, row = 0, level = '') => {
  if (n === 1) {
    console.log('#');
    return;
  }
  if (row === n) return;

  const maxLength = n * 2 - 1;
  if (level.length >= maxLength) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const pivot = Math.floor(maxLength / 2);
  const char = level.length >= pivot - row && level.length <= pivot + row ? '#' : ' ';

  pyramid(n, row, level + char);
};

module.exports = pyramid;
