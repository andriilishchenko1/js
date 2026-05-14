let amount = 3500;

const exchange = 43.7;

const commision = 0.005;

let totalgrn = amount * exchange;

let commission = totalgrn * commision;

let finalAmount = totalgrn - commission;

console.log(`Після виконання проєкту, буде нараховано ${finalAmount} грн з урахуванням комісії банку!`);