/*4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.
    */
//СТВОРИТИ ФУНКЦІЮ


let num = 5;

function checkSeason(season) {

if (season == 1){
    console.log ("Зараз зима");
}
else if (season == 2){
    console.log ("Зараз весна");
}
else if (season == 3){
    console.log ("Зараз літо");
}
else if(season == 4){
    console.log ("Зараз осінь");
}
else {
    console.log ("Невідома пора року");
}
}

checkSeason(num);