/*1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)
    */
//СТВОРИТИ ФУНКЦІЮ

let hamburger = 1;
let chips = 6;


function checkFood(a,b) {
if (a>=4 && b >=1) {
     console.log ("Ми поїли");
}
else {
     console.log ("Ми йдемо у інше кафе");
}
}

checkFood(hamburger,chips);