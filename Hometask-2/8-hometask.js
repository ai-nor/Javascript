/*8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

//СТВОРИТИ ФУНКЦІЮ


let sound = /[АаЕеЄєИиІіЇїОоУуЮюЯя]+/g;

let text = "Ой у лузі червона калина похилилася. УО-Уо-Уо. На-на-на";

function cutChars(condition, textForCut) {

    let cuted = textForCut.replace(condition, "");

return cuted;

}

console.log(cutChars(sound,text));