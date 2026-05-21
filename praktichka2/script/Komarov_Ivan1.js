let isAuthorized = prompt("Ви авторизовані? (true або false)") === "true";
let internetSpeed = Number(prompt("Введіть швидкість інтернету (Мб/с):"));
let isBanned = prompt("Акаунт заблокований? (true або false)") === "true";

let resultmessage;

if (isAuthorized && internetSpeed >= 20 && !isBanned) {
    resultmessage = "Доступ дозволено. Ви можете увійти в онлайн-режим.";
} else {
    resultmessage = "Доступ заборонено. Умови для входу не виконані.";
}

console.log(resultmessage);
alert(resultmessage);
