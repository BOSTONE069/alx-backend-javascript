/**
 * This function takes in a number, adds 89 to it, then adds 19 to it, and returns the result.
 * @param initialNumber - The number of neighborhoods in the city in the year 1900.
 * @param [expansion1989=89] - The number of new neighborhoods added in 1989
 * @param [expansion2019=19] - 19
 * @returns The sum of the three numbers.
 */
export default (initialNumber, expansion1989 = 89, expansion2019 = 19) => initialNumber + expansion1989 + expansion2019;

