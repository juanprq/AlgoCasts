// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// const buildStep = (n, current) =>
//   '#'.repeat(current) + ' '.repeat(n - current);

// function steps(n) {
//   Array(n)
//     .fill('')
//     .map((_, index) => buildStep(n, index + 1))
//     .forEach(v => console.log(v));
// }

// Matrix solution;
// const steps = (n) => {
//   const matrix = [];

//   for (let i = 0; i < n; i++) {
//     matrix[i] = [];

//     for (let j = 0; j < n; j++) {
//       matrix[i][j] = j <= i ? '#' : ' ';
//     }
//   }

//   matrix.forEach(row => console.log(row.join('')));
// };

// A possible recursive solution
const steps = (n, row = 0, stairs = '') => {
  if (row === n) return;

  if (stairs.length === n) {
    console.log(stairs);
    return steps(n, row + 1);
  }

  const char = stairs.length <= row ? '#' : ' ';
  steps(n, row, stairs + char);
};

module.exports = steps;
