let balance = 210000;
let exchange = 43.7;

let amount_1 = 60000;
let amount_2 = 2600 * (exchange + 1);
let amount_3 = 1700 * (exchange + 2);

let total_income = amount_1 + amount_2 + amount_3;

let rent_coworking = 3500 * 3;
let rent_tech = 4000 * 3;
let netflix = (9.99 * exchange) + (9.99 * (exchange + 1)) + (9.99 * (exchange + 2));

let total_spend = rent_coworking + rent_tech + netflix;

let total_commision = 4500 + (total_income * 0.05);

let final_balance = balance + total_income - total_spend - total_commision;

console.log(`В цьому кварталі Максим витратив ${total_spend} грн`);
console.log(`Загальний дохід Максима за квартал становить ${total_income} грн`);
console.log(`Загальна сума податків становить ${total_commision} грн`);
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${final_balance} грн`);