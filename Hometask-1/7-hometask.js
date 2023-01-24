/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль
    */
let operation = "/";
let a = 24;
let b = 6;
let result;

switch (operation) {
    case ("+"):
        result = a+b;
        break;
    case ("-"):
        result = a-b;
        break;
    case ("*"):
        result = a*b;
        break;
    case ("/"):
        result = a/b;
        break;
    default:
        console.log('Невідома операція');
        break;
} 
console.log ("Результат = " + result);