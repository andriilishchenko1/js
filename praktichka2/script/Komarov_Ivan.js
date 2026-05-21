let grade = Number(prompt("Введіть оцінку студента (від 1 до 12):"));
let graderesult;

switch (grade) {
    case 12:
    case 11:
    case 10:
        graderesult = "Відмінний результат";
        break;

    case 9:
    case 8:
    case 7:
        graderesult = "Добрий результат";
        break;

    case 6:
    case 5:
    case 4:
        graderesult = "Задовільний результат";
        break;

    case 3:
    case 2:
    case 1:
        graderesult = "Потрібно покращити знання";
        break;

    default:
        graderesult = "Некоректна оцінка";
}

console.log(graderesult);
alert(graderesult);
