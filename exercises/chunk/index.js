// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const result = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }

//   return result;
// };

// const chunk = (array, size) => Array(Math.ceil(array.length / size))
//   .fill()
//   .map((_, index) => {
//     const startingIndex = index * size;

//     return array.slice(startingIndex, startingIndex + size);
//   });

const chunk = (array, size) => {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (last && last.length < size) {
      last.push(element);
    } else {
      chunked.push([element]);
    }
  };

  return chunked;
};

module.exports = chunk;
