/**
 * ReturnHowManyArguments() returns the number of arguments passed to it.
 * @param args - The rest parameter syntax allows us to represent an indefinite number of arguments as
 * an array.
 * @returns the number of arguments passed to it.
 */
export default function returnHowManyArguments(...args) {
  return args.length;
}
