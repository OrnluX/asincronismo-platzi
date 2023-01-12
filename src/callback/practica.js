
// function callback (message) {
//     console.log(message)
// }

// const showMessage = (name, cb)=>{
//     const message = `Hola ${name}`;
//     cb(message)
// }


// showMessage('Juan', callback);

const suma = (num1,num2) => num1+num2;

const operar = (num1, num2, operacion)=>{
   let resultado = operacion(num1,num2);
   console.log(resultado)

}

operar(1,2,suma);