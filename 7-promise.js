//результат операції, яка ще не завершена, але буде завершена у майбутньому
//як приклад, хттп запит, коли ми чекаємо відповідь від сервера

//синхронізація коду за допомогою коллбеків

console.log("запит даних з серверу....");

setTimeout(()=> {
    console.log("Підготовка даних для відповіді....");

    const product= {
        name: "laptop",
        price:1000
    }
    setTimeout(()=> {
        product.status = "inStock";    //але коллбеками складно підтримати синхронність у коді, можна заплутатись. Тому потрібен promise
        console.log(product);
        },2000)
},5000);

//promise

const req = new Promise ((resolve,reject) =>{}); //стандарнний запис проміса, резолв це параметр, який виконується коли відпрацювало без помилок. реджект - коли помилки і щось пішло не так

const req2 = new Promise ((resolve,reject) =>{
    setTimeout(()=> {
        console.log("Підготовка даних для відповіді....");
    
        const product= {
            name: "laptop",
            price:1000
        }
        resolve(product);                                  //це те, що ми очікуємо після виконання промісу, накшталт ретюрна у функції. коли воно отримане, далі треба вказати then
    },5000); 
}); 

req2.then((data)=>{                                        //then - функція, яка виконується після отримання резолву, аргумент може називатися будь-як
    setTimeout(()=> {
        data.status = "inStock";    
        console.log(data);
        },2000)
})

//reject
const req3 = new Promise ((resolve,reject) =>{
    setTimeout(()=> {
        console.log("Підготовка даних для відповіді....");
    
        const product= {
            name: "laptop",
            price:1000
        }

        let ErrorHappend = true;
        if(ErrorHappend) {
            reject();                                  //реджект - коли виконати, за якої умови
        }

        resolve(product); 
         
    },5000); 
}); 

req3.then((data)=>{                      
    setTimeout(()=> {
        data.status = "inStock";    
        console.log(data);
        },2000)
})

req3.catch(()=>{                                        //catch - це те що треба виконати якщо був реджект
    console.log("Сталася помилка");
})

req3.finally(()=>{                                       //finally - блок, який треба виконати за будь-яких умов, незалежно від результату
    console.log("Я працюю за будь-яких умов");
})
