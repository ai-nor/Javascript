/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль
    */

//СТВОРИТИ ФУНКЦІЮ

let a = 24;
let b = 6;
let sym = "/";

function mathOperations(num1,num2,operator) {

let result;

switch (operator) {
    case ("+"):
        result = num1+num2;
        break;
    case ("-"):
        result = num1-num2;
        break;
    case ("*"):
        result = num1*num2;
        break;
    case ("/"):
        result = num1/num2;
        break;
    default:
        console.log('Невідома операція');
        break;
} 

return result;

}

console.log ("Результат = " + (mathOperations(a,b,sym)));