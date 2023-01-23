import getBudgetObject from './7-getBudgetObject.js';

/**
 * It takes in three numbers, returns an object with three properties, and adds two methods to that
 * object
 * @param income - The income of the country
 * @param gdp - Gross Domestic Product
 * @param capita - The per capita income of the country.
 * @returns An object with the properties of the budget object and two methods.
 */
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
