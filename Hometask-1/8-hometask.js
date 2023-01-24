/*8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
*/

let sound = /[АаЕеЄєИиІіЇїОоУуЮюЯя]+/g;

let text = "Ой у лузі червона калина похилилася. УО-Уо-Уо. На-на-на";

let cutSound = text.replace(sound, "");

console.log(cutSound);