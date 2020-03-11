// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// const palindrome = ([...chars]) => chars.join('') === chars.reverse().join('');

// A not so obvious solution, in theory we can iterate only to the half
const palindrome = ([...chars]) => chars.every((char, index) => char === chars[chars.length - 1 - index]);

module.exports = palindrome;
