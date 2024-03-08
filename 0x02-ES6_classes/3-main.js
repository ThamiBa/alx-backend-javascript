import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

const euro = new Currency('€', 'Euros');
console.log(euro.displayFullCurrency());

const bitcoin = new Currency('฿', 'Bitcoins');
console.log(bitcoin.displayFullCurrency());

const yen = new Currency('¥', 'Yen');
console.log(yen.displayFullCurrency());

const rupee = new Currency('₹', 'Rupee');
console.log(rupee.displayFullCurrency());

const peso = new Currency('₱', 'Peso');
console.log(peso.displayFullCurrency());

const ruble = new Currency('₽', 'Ruble');
console.log(ruble.displayFullCurrency());

const won = new Currency('₩', 'Won');
console.log(won.displayFullCurrency());

const yuan = new Currency('¥', 'Yuan');
console.log(yuan.displayFullCurrency());

const pound = new Currency('£', 'Pounds');
console.log(pound.displayFullCurrency());


