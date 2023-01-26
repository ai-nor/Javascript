/*9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")

    Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
    */

    //1 - пусто
    //2,3,4 - и
    //5,6,7.8.9.11, 12, 13, 14, 15, 16, 17, 18, 19, 0 - ів
    //дрібне - а


    let metr =4000;
    let km = metr/1000;
    
    let namem = "метр";
    let namekm = "кілометр";
    
    let convertm = metr.toString();
    let convertkm = km.toString();
    
    let lastm = convertm[convertm.length-1]; 
    let lastkm = convertkm[convertkm.length-1]; 
    
    
    if (!Number.isInteger(metr)) {
        endm = "а";
    }
    else if (convertm.length ==1 && lastm == 1) {
        endm = "";
    }
    else if ((convertm.length ===1) && (lastm == 2 || lastm == 3 || lastm == 4 )) {
        endm = "и";
    }
    else if ((convertm.length ===1) && (lastm == 5 || lastm == 6 || lastm == 7 || lastm == 8 || lastm == 9)) {
        endm = "ів";
    }
    else if (convertm.length ===2 && convertm[convertm.length-2] == 1) {
        endm = "ів";
    }
    else if (convertm.length >=2 && lastm == 1) {
        endm = "";
    }
    else if ((convertm.length >=2) && (lastm == 2 || lastm == 3 || lastm == 4 )) {
        endm = "и";
    }

    else if ((convertm.length >=2) && (lastm == 5 || lastm == 6 || lastm == 7 || lastm == 8 || lastm == 9 || lastm == 0)) {
        endm = "ів";
    }
    else {
        console.log ("Щось не врахувала");
    }
    
    if (!Number.isInteger(km)) {
        endkm = "а";
    }
    else if (convertkm.length ==1 && lastkm == 1) {
        endkm = "";
    }
    else if ((convertkm.length ===1) && (lastkm == 2 || lastkm == 3 || lastkm == 4 )) {
        endkm = "и";
    }
    else if ((convertkm.length ===1) && (lastkm == 5 || lastkm == 6 || lastkm == 7 || lastkm == 8 || lastkm == 9)) {
        endkm = "ів";
    }
    else if (convertkm.length ===2 && convertkm[convertkm.length-2] == 1) {
        endkm = "ів";
    }
    else if (convertkm.length >=2 && lastkm == 1) {
        endkm = "";
    }
    else if ((convertkm.length >=2) && (lastkm == 2 || lastkm == 3 || lastkm == 4 )) {
        endkm = "и";
    }

    else if ((convertkm.length >=2) && (lastkm == 5 || lastkm == 6 || lastkm == 7 || lastkm == 8 || lastkm == 9 || lastkm == 0)) {

        endkm = "ів";
    }
    else {
        console.log ("Щось не врахувала");
    }
    
    console.log (metr + " " + namem + endm + " це " + km + " " + namekm + endkm);