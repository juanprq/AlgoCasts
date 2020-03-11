// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar([...str]) {
  const charCountMap = str.reduce(
    (accum, char) => ({ ...accum, [char]: accum[char] + 1 || 1 }),
    {},
  );

  return Object.keys(charCountMap).reduce((accum, char) => {
    if (accum.value < charCountMap[char]) return { value: charCountMap[char], char };

    return accum;
  }, { char: '', value: -1 }).char;
}

module.exports = maxChar;
