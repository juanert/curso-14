console.log("Hola, desde un archivo");
// Comentario de una sola linea
/*
  Comentario de varias lineas
*/

// Variables
/*
  Las variables son contenedor de datos
  var: es una variable que puede cambiar su valor
  en cualquier parte del codigo (Hay excepciones)

  let: es una variable que puede cambiar su valor
  pero solo en el bloque de codigo que se encuentra

  const: es una variable que no puede cambiar su valor
*/
// Declaracion de variables
var nombre = "Juan"; //Variable global
let apellido = "Perez"; //Variable local
const PI = 3.1416; //Constante
// Imprimir variables
console.log(nombre, apellido, PI);
// Cambiar el valor de una variable
nombre = "Pedro";
apellido = "Ramirez";
//PI = "Hola"; No puedo cambiar el valor de una constante
// Imprimir variables
console.log(nombre, apellido, PI);
// Tipos de datos
let string = "Hola"; //Cadena de texto (string)
let numero = 10; //Numero (number)
let decimal = 10.5; //Numero decimal (number)
let booleano = true; //Booleano (boolean) true/false
let nulo = null; //Nulo (null)
let indefinido = undefined; //Indefinido (undefined)

// operadores comparativos
let mayor = 10 > 5; //true
let menor = 10 < 5; //false
let mayorIgual = 10 >= 5; //true
let menorIgual = 10 <= 5; //false
let igual = 10 == "10"; //true
let diferente = 10 != 5; //true
let exactamenteIgual = 10 === "10"; //false
console.log(mayor, menor, mayorIgual, menorIgual, igual, diferente);

// operadores logicos
let and = true && false; //false
let or = true || false; //true
let not = !true; //false
console.log(and, or, not);

// operadores aritmeticos
let suma = 10 + 5; //15
let resta = 10 - 5; //5
let multiplicacion = 10 * 5; //50
let division = 10 / 5; //2
let modulo = 10 % 5; //0
let exponente = 10 ** 5; //100000
console.log(suma, resta, multiplicacion, division, modulo);

// operadores de asignacion
let igualar = 10; //10

// Condicionales
let condicion = 10 > 5;
if(condicion){
  console.log("Hola");
} else if(condicion){
  console.log("Adios");
} else {
  console.log("Nada");
}

/*
  Ejericio 1
  Crear un programa que basado en la edad de una persona
  imprima los siguientes mensajes:
  0 - 5: "Eres un bebe"
  6 - 11: "Eres un niño"
  12 - 18: "Eres un adolescente"
  19 - 30: "Eres un joven"
  31 - 64: "Eres un adulto"
  65 - 120: "Eres un adulto mayor"
  Si la edad es menor a 0 o mayor a 120 imprimir:
  "La edad no es valida (Eres una imposibilidad en este mundo)"

  Ejercicio 2
  Crear un programa que basado en el dia de la semana
  imprima los siguientes mensajes:
  Lunes - Viernes: "Es un dia de la semana"
  Sabado - Domingo: "Es un fin de semana"
  Si no es ninguno de los dias anteriores imprimir:
  "Por favor ingrese un dia de la semana valido"

  Ejercicio 3:
  Crear un programa que basado en un numero N
  verifique si es par o impar e imprima los siguientes mensajes:
  "El numero N es par"
  "El numero N es impar"
  opcional:
  Si no es un numero entero imprimir el siguiente mensaje:
  "Por favor ingrese un numero entero"

  Ejercicio 4:
  Crea un programa que si te llamas "Juan" y tienes 20 años
  imprima el siguiente mensaje:
  "Bienvenido Juan, gracias por confiar en nosotros"
  Si no se cumple la condicion imprimir:
  "Lo sentimos pero no tienes acceso a este sitio"
*/

//Ejercicio 1

let edad = prompt("Ingrese su edad");

if(edad < 0 && edad > 120){
  alert("La edad no es valida (Eres una imposibilidad en este mundo)")
} else{
  if(edad >= 0 && edad <= 5){
    alert("Eres un bebe");
  } else if(edad >= 6 && edad <= 11){
    alert("Eres un niño");
  } else if(edad >= 12 && edad <= 18){
    alert("Eres un adolescente");
  } else if(edad >= 19 && edad <= 30){
    alert("Eres un joven");
  } else if(edad >= 31 && edad <= 64){
    alert("Eres un adulto");
  } else if(edad >= 65 && edad <= 120){
    alert("Eres un adulto mayor");
  }
}

//Ejercicio 2

let dia = prompt("Ingrese un dia de la semana");

if(dia == "Lunes" || dia == "Martes" || dia == "Miercoles" || dia == "Jueves" || dia == "Viernes"){
  alert("Es un dia de la semana");
} else if(dia == "Sabado" || dia == "Domingo"){
  alert("Es un fin de semana");
} else{
  alert("Por favor ingrese un dia de la semana valido");
}