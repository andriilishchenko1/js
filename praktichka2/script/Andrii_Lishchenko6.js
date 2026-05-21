let temperature = Number(prompt("Введіть температуру кімнати:"));
let sensorError = prompt("Чи є помилка датчика? (true або false)") === "true";
let resultmessage;
if (sensorError) {
    resultmessage = "Помилка датчика температури"
} else {
    if (temperature < 18) {
        resultmessage = "Увімкнути обігрів"
    } else if(temperature >= 18 && temperature <= 25) {
        resultmessage = "Температура комфортна"
    } else {
        resultmessage = "Увімкнути кондиціонер"
    }
}
console.log(resultmessage);
alert(resultmessage);
