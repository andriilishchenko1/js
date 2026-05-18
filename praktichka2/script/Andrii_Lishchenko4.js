let genre = prompt("Введіть назву музичного жанру (rock, pop, jazz, classical):");
let resultmessage;

switch (genre) {
    case "rock":
        resultmessage = "Увімкнено рок-плейлист";
        break;
    case "pop":
        resultmessage = "Увімкнено поп-плейлист";
        break;
    case "jazz":
        resultmessage = "Увімкнено джаз-плейлист";
        break;
    case "classical":
        resultmessage = "Увімкнено класичну музику";
        break;
    default:
        resultmessage = "Жанр не знайдено";
}

console.log(resultmessage);
alert(resultmessage);