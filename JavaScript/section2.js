//FUNCIONES
/*
  Una funcion es un bloque de codigo reutilizable
  que se puede ejecutar cada vez que se necesite
*/

// Declaracion de una funcion
function saludar() {
  console.log("Hola desde una funcion");
}

// Ejecutar una funcion
saludar();
saludar();
saludar();

// Codigo de colores (curiosidad)
let variable = "hola";
console.log("Hola desde un archivo");

// Funciones con parametros
function saludarConParametros(nombre = "Jhon", apellido = "Doe") {
  alert(`Hola ${nombre} ${apellido}`);
  //console.log("Hola " + nombre + " " + apellido);
}

// Ejecutar una funcion con parametros
/*
saludarConParametros("Juan", "Perez");
saludarConParametros("Pedro", "Martinez");
saludarConParametros("Maria", "Lopez");
saludarConParametros("Carlos", "");
saludarConParametros();
*/

// Funciones recursivas

function recursiva() {
  alert("Hola desde recursiva");
  recursiva();
}

/*
  Crea un boton que ejecute el ejercicio numero 1 de condicionales
  Crea un boton que ejecute el ejercicio numero 2 de condicionales
  Crea un boton que ejecute el ejercicio numero 3 de condicionales
  Crea un boton que ejecute el ejercicio numero 4 de condicionales
*/

// Funciones con retorno de valores
function retornar(condicion = false) {
  let mensaje = "Hola desde retornar";
  if (condicion) {
    return mensaje;
  } else {
    return "La condicion no se cumple";
  }
}

console.log(retornar());

//Alcance de variables
let local = "hola";
if (true) {
  /*
    Variables locales, solo funcionan en el bloque de codigo
    donde fueron declaradas
  */
  let variable = "hola";
  /*
    Variables globales, se pueden utilizar en cualquier parte
    del codigo
  */
  var variable2 = "hola2";
}

if (true) {
  let variable = "hola";
}
console.log(variable, variable2);

// Alcance de funciones
function alcance() {
  var prueba_alcance = "hola";
  return prueba_alcance;
}
//Ejecucion
console.log(alcance());
//Imprime todo el codigo de la funcion
console.log(alcance);

// Metodos de cadenas de texto (strings)
let cadena = "Hola mundo";
// Longitud de la cadena
console.log(cadena.length);
// Transformar a mayusculas
console.log(cadena.toUpperCase());
// Transformar a minusculas
console.log(cadena.toLowerCase());
// Obtener un caracter de la cadena
console.log(cadena.charAt(5));
// Verificar si una cadena contiene un texto
console.log(cadena.includes("mundo"));
// Reemplazar texto de una cadena
console.log(cadena.replace("mundo", "a todos"));
/*
  cadena = cadena.replace("mundo", "a todos");
*/
// Cortar un string
console.log(cadena.slice(0, 4));
// Crear un substring
console.log(cadena.substring(0, 4));

/*
  Ejercicio 1:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en mayusculas
  Ejemplo:
  Entrada: "Hola mundo"
  Salida: "HOLA MUNDO"

  Ejercicio 2:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en minusculas

  Ejercicio 3:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la longitud de la cadena de texto

  Ejercicio 4:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la primera letra de la cadena de texto

  Ejercicio 5:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la ultima letra de la cadena de texto

  Ejercicio 6:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto sin la primera letra

  Nota: debes crear un boton en HTML para ejecutar cada ejercicio
  (son 6 botones), cada boton debe pedirmele al usuario un texto
  y mostrarle el resultado del ejercicio correspondiente
*/

// Ejercicio 1
function ejercicio1(texto) {
  alert(texto.toUpperCase());
}

let texto = prompt("Ingrese un texto");
ejercicio1(texto);

// Ejercicio 2
function ejercicio2(texto) {
  alert(texto.toLowerCase());
}

let texto2 = prompt("Ingrese un texto");
ejercicio2(texto2);

// Ejercicio 3
function ejercicio3(texto) {
  alert(texto.length);
}

let texto3 = prompt("Ingrese un texto");
ejercicio3(texto3);

// Ejercicio 4
function ejercicio4(texto) {
  alert(texto.charAt(0));
}

let texto4 = prompt("Ingrese un texto");
ejercicio4(texto4);

// Ejercicio 5
function ejercicio5(texto) {
  alert(texto.charAt(texto.length - 1));
}

let texto5 = prompt("Ingrese un texto");
ejercicio5(texto5);

//ejercicio 6
function ejercicio6(texto) {
  alert(texto.slice(1, texto.length));
}

let texto6 = prompt("Ingrese un texto");
ejercicio6(texto6);

// Arreglos (arrays)
let frutas = ["manzana", "pera", "mango", "fresa"];
console.log(frutas);
//Imprimir un elemento del arreglo
console.log(frutas[0]);
let aleatorios = [1, "hola", true, 2.5, [1, 2, 3]];
let compras = [
  ["manzana", "pera"],
  ["jamon", "queso"],
  ["carne", "pollo"],
];
console.log(compras[1][0]);
let actividades = [
  [
    ["comer en casa", "comer afuera"],
    ["dormir en cama", "dormir en el sofa"],
  ],
  ["correr", "saltar"],
];

console.log(actividades[0][1][1]);

// Metodos de arreglos
frutas = ["manzana", "pera", "mango", "fresa"];
// Agregar un elemento al final del arreglo
frutas.push("uvas");
console.log(frutas);
// Eliminar el ultimo elemento del arreglo
frutas.pop();
console.log(frutas);
// Agregar un elemento al inicio del arreglo
frutas.unshift("uvas");
console.log(frutas);
// Eliminar el primer elemento del arreglo
frutas.shift();
console.log(frutas);
// Obtener el indice de un elemento del arreglo
console.log(frutas.indexOf("mango"));
// Eliminar un elemento del arreglo por su indice
frutas.splice(2, 1);
console.log(frutas);
// Reemplazar un elemento del arreglo por su indice
frutas[1] = "piña";
// Ordenar un arreglo alfabeticamente
frutas.sort();
console.log(frutas);
// Invertir el orden de un arreglo
frutas.reverse();
console.log(frutas);
// Obtener un subarreglo
console.log(frutas.slice(0, 2));
// Obtener la longitud de un arreglo
console.log(frutas.length);

// Bucles o loops o ciclos
// Ciclo For
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// i = i + 1
//recorrer un arreglo
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

/*
  Ejercicios 7:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola cada elemento del arreglo

  Ejercicios 8:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola la suma de todos los elementos del arreglo

  Ejercicios 9:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el promedio de todos los elementos del arreglo

  Ejercicios 10:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero mayor del arreglo

  Ejercicios 11:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero menor del arreglo

  Ejercicios 12:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola los numeros pares del arreglo

  Ejercicios 13:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola los numeros impares del arreglo

  Ejercicios 14:
  Crear una funcion que reciba como parametro un arreglo de frutas
  e imprima el nombre de la fruta mas larga

  Ejericio 15:
  Crea una funcion que realice la sucecion de fibonacci

  Ejericio 16:
  Crea las funciones agregar, eliminar, buscar, actualizar
  de un arreglo. Cada funcion debe recibir como parametro
  el arreglo y el elemento a agregar, eliminar, buscar o actualizar
  y debe retornar el arreglo modificado. Debes imprimir el arreglo
  modificado en cada funcion para verificar su funcionamiento
*/

// Ejercicio 7
function ejercicio7(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
  }
}

let arreglo_numeros = [1, 2, 3, 4, 5];
ejercicio7(arreglo_numeros);

// Ejercicio 8
function ejercicio8(arreglo) {
  let resultado = 0;
  for (let i = 0; i < arreglo.length; i++) {
    resultado = arreglo[i] + resultado;
  }
  console.log(resultado);
}

ejercicio8(arreglo_numeros);
ejercicio8([2, 5, 10, 20]);
ejercicio8([10, 100, 520, 357]);

// Ejercicio 9
function ejercicio9(arreglo) {
  let resultado = 0;
  for (let i = 0; i < arreglo.length; i++) {
    resultado = arreglo[i] + resultado;
  }
  console.log(resultado / arreglo.length);
}

ejercicio9(arreglo_numeros);

// Ejercicio 10
function ejercicio10(arreglo) {
  let resultado = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > resultado) {
      resultado = arreglo[i];
    }
  }
  console.log(resultado);
}

ejercicio10(arreglo_numeros);

// Ejercicio 11
function ejercicio11(arreglo) {
  let resultado = arreglo[0];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] < resultado) {
      resultado = arreglo[i];
    }
  }
  console.log(resultado);
}

ejercicio11(arreglo_numeros);

// Ejercicio 12
function ejercicio12(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
      console.log(`El numero ${arreglo[i]} es par, la posicion es ${i}`);
    }
  }
}

ejercicio12(arreglo_numeros);

// Ejercicio 13
function ejercicio13(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    if (Math.floor(arreglo[i]) % 2 != 0) {
      console.log(`El numero ${arreglo[i]} es impar, la posicion es ${i}`);
    }
  }
}

ejercicio13(arreglo_numeros);

// Ejercicio 14
let frutas = ["Guanabana", "fresa", "mango", "platano"];

function ejercicio14(arreglo) {
  let resultado = 0;
  let palabra = "";
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].length > resultado) {
      resultado = arreglo[i].length;
      palabra = arreglo[i];
    }
  }
  console.log(palabra);
}

ejercicio14(arreglo_numeros);

// Bucle while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// Bucle do while
/*
  Ejecuta el codigo al menos una vez
*/
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 10);

// for of
/*
  Sirve para recorrer arreglos
*/
let carros = ["Mazda", "Toyota", "Chevrolet", "Renault"];
for (let carro of carros) {
  console.log(carro);
}

// Objetos
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
  hobbies: ["correr", "saltar", "dormir"],
  direccion: {
    calle: "calle 1",
    numero: 1,
    barrio: "barrio 1",
  },
  saludar: function (mensaje) {
    console.log(mensaje);
  },
};

console.log(`Hola mi nombre es ${persona.nombre} ${persona.apellido} y
tengo ${persona.edad} años`);

persona.saludar();

// array de objetos
let personas = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
      calle: "calle 1",
      numero: 1,
      barrio: "barrio 1",
    },
  },
  {
    nombre: "Maria",
    apellido: "Lopez",
    edad: 30,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
      calle: "calle 2",
      numero: 2,
      barrio: "barrio 2",
    },
  },
  {
    nombre: "Pedro",
    apellido: "Martinez",
    edad: 35,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
      calle: "calle 3",
      numero: 3,
      barrio: "barrio 3",
    },
  },
];

console.log(personas[1].nombre);

//For in
/*
  Sirve para recorrer objetos
*/
for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
  //persona."direccion"
  console.log(persona["direccion"]);
}

// Ejericio de una lista de objetos que contienen listas de objetos
let compras_supermercado = [
  {
    nombre: "Juan",
    productos: [
      {
        nombre: "manzana",
        cantidad: 2,
        precio: 1000,
      },
      {
        nombre: "pera",
        cantidad: 3,
        precio: 2000,
      },
    ],
  },
  {
    nombre: "Maria",
    productos: [
      {
        nombre: "jamon",
        cantidad: 1,
        precio: 5000,
      },
      {
        nombre: "queso",
        cantidad: 2,
        precio: 10000,
      },
    ],
  },
  {
    nombre: "Pedro",
    productos: [
      {
        nombre: "carne",
        cantidad: 1,
        precio: 10000,
      },
      {
        nombre: "pollo",
        cantidad: 2,
        precio: 8000,
      },
    ],
  },
];

for (let persona of compras_supermercado) {
  for (let propiedad in persona) {
    console.log(`Tengo una propiedad llamada ${propiedad}
    y tiene un valor el cual es: ${persona[propiedad]}`);
    if (propiedad == "productos") {
      for (let producto of persona[propiedad]) {
        for (let propiedad_producto in producto) {
          console.log(`Tengo una propiedad llamada ${propiedad_producto}
         y tiene un valor el cual es: ${producto[propiedad_producto]}`);
        }
      }
    }
  }
}

// Ejercicio hecho con FOR
for (let i = 0; i < compras_supermercado.length; i++) {
  console.log(
    `${compras_supermercado[i].nombre} tiene los siguientes productos:`
  );
  for (let j = 0; j < compras_supermercado[i].productos.length; j++) {
    console.log(compras_supermercado[i].productos[j].nombre);
  }
}

// Ejercicios para practicar
/*
  Segun el siguiente arreglo de objetos:

  const personas = [
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
      hobbies: ["correr", "saltar", "dormir"],
      direccion: {
        direccion_antigua: {
          calle: "calle 1",
          numero: 1,
          barrio: "barrio 1",
        },
        direccion_actual: {
          calle: "calle 2",
          numero: 2,
          barrio: "barrio 2",
        },
      },
    },
    {
      nombre: "Maria",
      apellido: "Lopez",
      edad: 30,
      hobbies: ["correr", "saltar", "dormir"],
      direccion: {
        direccion_antigua: {
          calle: "calle 3",
          numero: 3,
          barrio: "barrio 3",
        },
        direccion_actual: {
          calle: "calle 4",
          numero: 4,
          barrio: "barrio 4",
        },
      },
    },
    {
      nombre: "Pedro",
      apellido: "Martinez",
      edad: 35,
      hobbies: ["correr", "saltar", "dormir"],
      direccion: {
        direccion_antigua: {
          calle: "calle 5",
          numero: 5,
          barrio: "barrio 5",
        },
        direccion_actual: {
          calle: "calle 6",
          numero: 6,
          barrio: "barrio 6",
        },
      },
    },
  ]

  Ejercicio 1:
  Imprimir en consola el nombre de todas las personas
  Ejercicio 2:
  Imprimir en consola todos los hobbies de todas las personas
  Ejercicio 3:
  Imprimir en consola todas las direcciones de todas las personas
  Ejercicio 4:
  Imprimir en consola la direccion actual de todas las personas
  Ejercicio 5:
  Imprimir en consola la direccion antigua de todas las personas

  Nota:
  Realizarlo con for of y for in y si lo deseas con for
*/

const personas2 = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
      direccion_antigua: {
        calle: "calle 1",
        numero: 1,
        barrio: "barrio 1",
      },
      direccion_actual: {
        calle: "calle 2",
        numero: 2,
        barrio: "barrio 2",
      },
    },
  },
  {
    nombre: "Maria",
    apellido: "Lopez",
    edad: 30,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
      direccion_antigua: {
        calle: "calle 3",
        numero: 3,
        barrio: "barrio 3",
      },
      direccion_actual: {
        calle: "calle 4",
        numero: 4,
        barrio: "barrio 4",
      },
    },
  },
  {
    nombre: "Pedro",
    apellido: "Martinez",
    edad: 35,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
      direccion_antigua: {
        calle: "calle 5",
        numero: 5,
        barrio: "barrio 5",
      },
      direccion_actual: {
        calle: "calle 6",
        numero: 6,
        barrio: "barrio 6",
      },
    },
  },
]


// Ejercicio 1
for(let persona of personas2){
  console.log(persona.nombre);
}

// Ejercicio 2
for(let persona of personas2){
  //console.log(persona.hobbies.join(", "));
  for(let hobby of persona.hobbies){
    console.log(hobby);
  }
}

// Ejercicio 3, 4 y 5
for(let persona of personas2){
  // Dirección actual
  console.log(`Dirección actual: ${persona.direccion_actual.calle}
  ${persona.direccion_actual.numero} ${persona.direccion_actual.barrio}`);
  // Dirección antigua
  console.log(`Dirección antigua: ${persona.direccion_antigua.calle}
  ${persona.direccion_antigua.numero} ${persona.direccion_antigua.barrio}`);
}

/*
Ejericio 15:
Crea una funcion que realice la sucecion de fibonacci

Ejericio 16:
Crea las funciones agregar, eliminar, buscar, actualizar de un arreglo. Cada funcion debe recibir como parametro el arreglo y el elemento a agregar, eliminar, buscar o actualizar y debe retornar el arreglo modificado. Debes imprimir el arreglo modificado en cada funcion para verificar su funcionamiento
*/
let fibonacci1 = 1
let fibonacci2 = 0
for(let i = 0; i < 20; i++){
  console.log(fibonacci1);
  fibonacci1 = fibonacci1 + fibonacci2;
  fibonacci2 = fibonacci1 - fibonacci2;
}

// ejercicio 17
const arreglo_prueba = []

function agregar(arreglo, elemento){
  arreglo.push(elemento);
  return arreglo;
}

function eliminar(arreglo, elemento){
  arreglo.splice(arreglo.indexOf(elemento), 1);
  return arreglo;
}

function buscar(arreglo, elemento){
  if(arreglo.indexOf(elemento) != -1){
    return "El elemento si existe";
  }else{
    return "El elemento no existe";
  }
}

function actualizar(arreglo, elemento, nuevo_elemento){
  if(arreglo.indexOf(elemento) != -1){
    arreglo[arreglo.indexOf(elemento)] = nuevo_elemento;
    return arreglo;
  } else {
    console.log("El elemento no existe");
  }
}

console.log(agregar(arreglo_prueba, 1));
console.log(agregar(arreglo_prueba, 2));
console.log(agregar(arreglo_prueba, 3));
console.log(agregar(arreglo_prueba, 4));
console.log(agregar(arreglo_prueba, 5));

console.log(eliminar(arreglo_prueba, 3));

console.log(buscar(arreglo_prueba, 3));

console.log(actualizar(arreglo_prueba, 2, 10));