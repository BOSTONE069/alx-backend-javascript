/**
 * "Get the budget for the current year."
 *
 * The function is named getBudgetForCurrentYear. It takes three arguments: income, gdp, and capita. It
 * returns an object with three properties: income, gdp, and capita
 * @returns An object with the current year as the key and the value of the income, gdp, and capita.
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
