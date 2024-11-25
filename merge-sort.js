function mergeSort(array) {
  // Base case
  if (array.length <= 1) {
    return array;
  }

  const midpoint = Math.ceil(array.length / 2);

  // Sort the left half
  const firstHalf = array.slice(0, midpoint);
  const sortedFirstHalf = mergeSort(firstHalf);

  // Sort the right half
  const secondHalf = array.slice(midpoint);
  const sortedSecondHalf = mergeSort(secondHalf);

  // Merge the sorted halves
  const mergedArray = [];

  while (sortedFirstHalf.length > 0 && sortedSecondHalf.length > 0) {
    if (sortedFirstHalf[0] < sortedSecondHalf[0]) {
      mergedArray.push(sortedFirstHalf.shift());
    } else {
      mergedArray.push(sortedSecondHalf.shift());
    }
  }

  return mergedArray.concat(sortedFirstHalf, sortedSecondHalf);
}
