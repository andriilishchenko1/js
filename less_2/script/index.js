// if (вираз){
//     [інструкції];
//     [інструкції];
//     [інструкції];
// }
// false
// 0
// 0n-big integer(великі числа)
// ""
// null
// undefined
// Nan(Not a number)

//Оператори порівняння

// let a = 2, b = 3, c;
// console.log(a == b);
// console.log(a != b);
// console.log(a > b); //< >= <=
//
// console.log(b === c);//Сторога рівність !== - нерівність

// if(a > b){
//     c = 'a > b'
// } else{
//     c = 'a < b'
// }
// console.log(c)

// if (a > b){
//     c = "a > b"
// } else{
//     if(a < b){
//         c = "a < b"
//     }
//     else{
//         c = "a === b"
//     }
// }

// if (a > b){
//     c = "a > b"
// } else if(a < b){
//     c = "a > b"
// }
// else {
//     c = 'a === b'
// }

// if (a > b)c = 'a > b';
// else if (a < b)c = 'a < b';
// else c = "a === b";




//switch

// let course, title;
// course = prompt("Введіть направлення для опанування");
//
// switch (course) {
//     case "javascript":
//         title = "мова програмування Java Scribd";
//         break;
//
//     case "Figma":
//         title = "Основи Figma";
//         break;
//
//     case "Frontend Development":
//     case "HTML":
//     case "CSS":
//         title = "HTML + CSS"
//         break;
//     default:
//         title = 'я не знаю, що ти хочіш'
//         break;
// }
// alert(title);


//Логічні оператори


//Логічне не
// let a = false;
// console.log(!a); // отримаємо True
// let b = 'text';
// console.log(!!b); // Перевіряє чи є щось у змінній

//Логічне і
// let a = true, b = true, c = false;
// console.log(a && b);
// console.log(a && c);
//
//
// //Логічне або
// console.log(b || c);
//

// let age = prompt('Скільки тобі років?'), info;
// if(age >= 18 && age< 35){
//     info = 'Користувачу від 18 до 35 років'
// }
// else if(age > 35){
//     info = 'Кориситувачу більше 35 років'
// }else{
//     info = "Користувач неповнолітній"
// }
// alert(info);
