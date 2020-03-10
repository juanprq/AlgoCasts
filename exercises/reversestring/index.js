// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Simple solution using the reverse method from array
// const reverse = ([...list]) => list.reverse().join('');

// More sofisticated solution using reduce
// function reverse([...list]) {
//   return list.reduce((accum, value) => {
//     return value + accum;
//   }, '');
// }

// Even a more sofisticated solution using recursion
// const localReverse = ([head, ...rest]) => (head ? localReverse(rest) + head : '');
// const reverse = ([...list]) => localReverse(list);

// A solution using a for loop, very imperative
// const reverse = (string) =>  {
//   let result = '';

//   for (let i = string.length - 1; i >= 0; i--) {
//     result += string[i];
//   }

//   return result;
// };

// A little more cleaner solution using a more expressive for
const reverse = (string) => {
  let result = '';

  for (let letter of string) {
    result = letter + result;
  }

  return result;
};

module.exports = reverse;
