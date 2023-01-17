// operator + об'єднує 2 рядки

console.log ('Hello' + 'world'); //склеїть 2 рядки
console.log (3 + 'world'); // приведе цифру до стрінги і склеїть
console.log (3 + 2); //просумують 2 числа

//інкресент і декремент

let incr = 10;
let decr = 10;

incr++; //збільшити на 1 після дії зі змінною
decr--; //зменшити на 1 після дії зі змінною

console.log(incr,decr);

++incr; //збільшити на 1 перед дією зі змінною
--decr; //зменшити на 1 перед дією зі змінною
console.log(incr,decr);

//= використовіється тільки для присвоєння значення
//== використовується для порівняння
console.log (2+4==8); //true
console.log (2+4=='8'); //true

// === строге порівняння без приведення до одного типу
console.log (2+4===8); //true
console.log (2+4==='8'); //false

//логічні оператори 
//і && - дає true тільки коли все true, інші false 
//або || - дає false тільки коли все false, інші true
// заперечення ! - заперечує і перетворює true на false і навпаки


//хочу купити гамбургер і картоплю. якщо обидва є у наявності, я їх купую і буду ситим
let chips = true;
let hamburger = true;

if (chips&&hamburger) {
    console.log('Я наївся');
}
else {
    console.log ('Чогось немає у наявності');
}

let chips2 = 5; //true
let hamburger2 = 0; //false
if (chips2&&hamburger2) {
    console.log('Я наївся');
}
else {
    console.log ('Чогось немає у наявності');
}
//null, NaN, '', 0, undefined - завжди false
