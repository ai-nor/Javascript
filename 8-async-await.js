//!!!! сайпрес не використовує цей синтаксис у тестах

async function asyncFn(){                                       //ця функція ЗАВЖДИ повертає promise
    console.log("text");                                                 
}

asyncFn().then((value) =>{
    console.log(value);
})

const timerPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 sec wait');
            resolve()
        }, 2000)
    })
}

const asyncFn3 = async () => {
    console.log('start')
    await timerPromise()
    console.log('end')
}

asyncFn3();