//Try Catch
/*
  El try catch es una estructura que nos permite manejar
  errores en nuestro código.
*/

//Ejemplo 1
try {
  let x = 10;
  let y = 0;
  console.log(x / y);
  if (y == 0) {
    throw "No se puede dividir entre 0";
  }
} catch (error) {
  console.error(error);
  console.log("Esto si se ejecuta");
}

/*
  ASINCRONISMO
  El asincronismo es una característica de JavaScript que nos
  permite ejecutar código sin necesidad de esperar a que se
  ejecute una línea de código.
*/

//setInterval
/*
  La función setInterval nos permite ejecutar una función
  cada cierto tiempo.
*/

//Ejemplo 1

setInterval(() => {
  console.log("Hola");
}, 1000);

//SetTimeout
/*
  La función setTimeout nos permite ejecutar una función
  después de cierto tiempo.
*/

//Ejemplo 1
setTimeout(() => {
  console.log("Hola");
}, 1000);

/*Otras funciones asincronicas o conceptos*/

//Callbacks
/*
  Un callback es una función que se pasa como argumento a otra
  función.
*/

//Promesas
/*
  Las promesas son una forma de trabajar con código asincrónico
  de una manera más sencilla.
*/

//Ejemplo 1
let promesa = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("Se ejecutó la promesa");
    }, 1000);
  } catch (error) {
    setTimeout(() => {
      reject("No se ejecutó la promesa");
    }, 2000);
  }
});

promesa
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

//Async Await
/*
  El async await es una forma de trabajar con promesas de una
  manera más sencilla.
*/

//Ejemplo 1
async function promesa() {
  try {
    let response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Se ejecutó la promesa");
      }, 1000);
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
