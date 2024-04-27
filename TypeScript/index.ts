let firstName : string = "John"; // String
let result: number = 10 + 20; // Number
let condition : boolean = true; // Boolean
let names : string[] = ["John", "Doe", "Smith"]; // Array
let x : [string, number] = ["John", 10]; // array
let y : any = "Hello"; // Any
//let never : never = "Hola"; // Never
let z : null = null; // Null
let u : undefined = undefined; // Undefined
let graph : [x: number, y: number] = [10, 20]; // Tuple
let object : object = {name: "John", age: 30}; // Object
const car : {name: string, model: string, year: number, mileage?: number} = {
    name: "Toyota",
    model: "Corolla",
    year: 2020,
    mileage: 10000
}; // Object


// Interfaces
/*
  Las interfaces son una forma poderosa de definir contratos
  dentro de su código, así como para definir tipos personalizados.
*/

type CarYear = number
type CarType = string
type CarModel = string
type Car2 = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car2: Car2 = {
  year: carYear,
  type: carType,
  model: carModel
};

//Datos variables
function printStatusCode(code: string | number) {
  console.log(`Status Code: ${code}`);
}

//HTML element
const element : Node | null = document.querySelector(".container");

//Void Function
function printMessage(message: string) : void {
  console.log(message);
}

/*
  Ejericio 1
  Crear una interfaz que sirva para validar el siguiente objeto

  const task = {
    id: 1,
    name: "Buy Milk",
    completed: false
  }

  Ejercicio 2
  Crear una interfaz que sirva para validar la siguiente función

  function saveTask(task: Task) {
    console.log(task);
  }

  Ejercicio 3
  Valida el siguiente objeto e imprime un mensaje en consola si el objeto tiene la 
  propiedad completed a true

  const task = {
    id: 1,°qD3C4R5FVGTH6
    name: "Buy Milk",
    completed: true
  }
*/