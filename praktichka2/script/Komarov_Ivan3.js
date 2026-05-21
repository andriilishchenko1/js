let score = Number(prompt("Введіть кількість балів:"));
let homeworkDone = prompt("Всі домашні завдання виконані? (true або false)") === "true";
let finalTestPassed = prompt("Фінальний тест пройдено? (true або false)") === "true";

let resultmessage;

if (score >= 70 && homeworkDone && finalTestPassed) {
    resultmessage = "Сертифікат успішно отримано";
} else {
    resultmessage = "Умови для отримання сертифіката не виконані";
}

console.log(resultmessage);
alert(resultmessage);
