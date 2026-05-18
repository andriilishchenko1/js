let day = prompt("Введіть день тижня:");
let price;
let resultmessage;

switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
        price = 150;
        resultmessage = `Вартість квитка складає ${price} грн`;
        break;

    case "четвер":
    case "п'ятниця":
        price = 200;
        resultmessage = `Вартість квитка складає ${price} грн`;
        break;

    case "субота":
    case "неділя":
        price = 250;
        resultmessage = `Вартість квитка складає ${price} грн`;
        break;

    default:
        resultmessage = "Помилка введення дня тижня";
}

console.log(resultmessage);
alert(resultmessage);