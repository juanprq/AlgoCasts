// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const getCleanChars = (string) => string
  .replace(/[^\w]/g, '')
  .toLowerCase()
  .split('');

const getCharMap = (chars) => chars
  .reduce((accum, key) => ({ ...accum, [key]: (accum[key] + 1 || 1) }), {});

const isEqual = (mapA, mapB) => {
  const keysA = Object.keys(mapA);
  const keysB = Object.keys(mapB);

  if (keysA.length !== keysB.length) return false;

  return keysA.reduce((accum, key) => (accum && mapA[key] === mapB[key]), true);
};

// I think this is a shorters and simpler solution
// function anagrams(stringA, stringB) {
//   const charsA = getCleanChars(stringA);
//   const charsB = getCleanChars(stringB);

//   return charsA.sort().join('') === charsB.sort().join('');
// }

const anagrams = (stringA, stringB) => {
  const charsA = getCleanChars(stringA);
  const charsB = getCleanChars(stringB);

  const charsMapA = getCharMap(charsA);
  const charsMapB = getCharMap(charsB);

  return isEqual(charsMapA, charsMapB);
};

module.exports = anagrams;
