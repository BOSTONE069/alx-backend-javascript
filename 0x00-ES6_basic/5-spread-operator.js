/**
 * Concatenate two arrays and a string into a new array.
 * @param array1 - [1, 2, 3]
 * @param array2 - [1, 2, 3]
 * @param string - 'string'
 * @returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
 * 'm', 'n', 'o', 'p', 'q', 'r', 's', 't
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string.split('')];
}
