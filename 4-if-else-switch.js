
//якщо - то...
if (1 = 1) {
    console.log('істинне');
}

//в іншому випадку... 
if (1 = 1) {
    console.log('істинне');
}
else{
    console.log('хибне');
}

// додаткова умова
if (1 = 1) {
    console.log('істинне');
}
else if (1=2) {
    console.log('хибне');
}
else{
    console.log('нічого не підходить');
}

(num = 20) ? console.log('ok') : console.log('not ok'); //якщо намбер = 20, то у консолі вивести ок, інашке у консолі вивести не ок

//switch-case - якщо умов багато
let num = 49;
switch (num) {
    case 49:
        console.log('49');
        break;
    case 49:
        console.log('50');
        break;
    case 65:
        console.log('65');
        break;
    default:
        console.log('default');
        break;
} 