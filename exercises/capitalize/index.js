// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// const capitalizeWord = word => {
//   const [head, ...rest] = word;

//   return head.toUpperCase() + rest.join('');
// };

// function capitalize(string) {
//   return string
//     .split(' ')
//     .map(capitalizeWord)
//     .join(' ');
// }

const capitalize = string => string
  .split('')
  .map((value, index) =>
    (index === 0 || string[index - 1] === ' ')
    ? value.toUpperCase() : value
  )
  .join('');

module.exports = capitalize;
