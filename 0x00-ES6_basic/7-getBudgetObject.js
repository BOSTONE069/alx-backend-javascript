/**
 * This function takes in three numbers and returns an object with those numbers as properties.
 * @param income - the country's income
 * @param gdp - Gross Domestic Product
 * @param capita - The average income per person in the country.
 * @returns an object with the properties income, gdp, and capita.
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita
  };

  return budget;
}
