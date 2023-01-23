/**
 * It takes an array and a string, and returns a new array with the string appended to each value in
 * the original array
 * @param array - an array of strings
 * @param appendString - The string to append to each value in the array.
 * @returns [ 'a', 'b', 'c' ]
 */
export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value;
  }

  return array;
}
