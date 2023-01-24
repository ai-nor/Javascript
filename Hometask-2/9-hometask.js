/*9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
    */

//СТВОРИТИ ФУНКЦІЮ


let metr =2563;
let km = metr/1000;

let namem = "метр";
let namekm = "кілометр";


function lastChar(value) {
let convert = value.toString();

let last = convert[convert.length-1]; 

if (!Number.isInteger(value)) {
    ending = "а";
}
else if (convert.length ==1 && last == 1) {
    ending = "";
}
else if ((convert.length ===1) && (last == 2 || last == 3 || last == 4 )) {
    ending = "и";
}
else if ((convert.length ===1) && (last == 5 || last == 6 || last == 7 || last == 8 || last == 9)) {
    ending = "ів";
}
else if (convert.length ===2 && convert[convert.length-2] == 1) {
    ending = "ів";
}
else if (convert.length >=2 && last == 1) {
    ending = "";
}
else if ((convert.length >=2) && (last == 2 || last == 3 || last == 4 )) {
    ending = "и";
}
else if ((convert.length >=2) && (last == 5 || last == 6 || last == 7 || last == 8 || last == 9)) {
    ending = "ів";
}
else {
    console.log ("Щось не врахувала");
}
return ending;
}



console.log (metr + " " + namem + lastChar(metr) + " це " + km + " " + namekm + lastChar(km));