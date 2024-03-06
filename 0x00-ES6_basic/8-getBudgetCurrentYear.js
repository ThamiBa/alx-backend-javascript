function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

// alx-backend-javascript/0x00-ES6_basic/8-getBudgetCurrentYear.js
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
