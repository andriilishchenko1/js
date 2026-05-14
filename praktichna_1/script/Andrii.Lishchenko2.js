let exchange = 43.7;
let ysv = 4500;
let commision = 0.05;

let amount_1 = 68000;
let amount_2 = 2600 * exchange;
let amount_3 = 1900 * exchange;

let total_income = amount_1 + amount_2 + amount_3;
let total_commision = (total_income * commision) + ysv;

console.log(`Загальна сума доходу Максима складає ${total_income} грн`);
console.log(`В кінці кварталу Максиму необхідно сплатити ${total_commision} грн`);