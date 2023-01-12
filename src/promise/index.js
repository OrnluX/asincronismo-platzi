const cows = 15;

const countCows = new Promise ((resolve, reject)=>{
    if (cows > 10) {
        resolve(`Si. Tenemos las suficientes: ${cows} vacas.`);
    } else {
        reject(`No tenemos suficientes. Contamos con ${cows} vacas.`);
    }
});

countCows.then(result => 
    
    console.log(result)

    ).catch( e => console.log(e)
).finally(()=>{
    console.log('Validación Completada')
});