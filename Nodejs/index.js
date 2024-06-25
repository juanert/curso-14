const express = require('express'); //requerir express
const mongoose = require('mongoose'); //requerir mongoose
const cors = require('cors'); //requerir cors
const app = express(); //ejecutar express
const port = 3001; //crear un puerto
app.use(express.json()); //usar json

app.use(cors());

//conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/nodejs');

//Traer ruta de productos
const productos = require('./Routes/Products');
const pruebas = require('./Routes/Tests');

//usar la ruta de productos
app.use(
  productos,
  pruebas
);

//escucho al puerto que cree
app.listen(port, () => {
    console.log('Me ejecuto en el puerto ' + port);
});

/*
  Ejercicio:
  - Crear una ruta para obtener un producto por su nombre
  - Crea  una ruta con una query para obtener los productos gratis
  - Crea una ruta con una query para traer solo un limite de productos
*/


/*
  Proyecto:
  Crear una API para manejar el personal de una tienda
  - Crear un modelo para empleados
  (nombre, apellido, edad, departamento (ObjectId), salario, fecha de ingreso, fecha de salida, telefono, email, direccion, ciudad, pais, codigo postal, fecha de creacion, fecha de actualizacion, fecha de eliminacion, estado (activo, inactivo)
  - Crear un modelo para departamentos
  (nombre, descripcion, fecha de creacion, fecha de actualizacion, fecha de eliminacion, estado (activo, inactivo)

  - Crear rutas para cada modelo
  - Crear controladores para cada modelo
  - Para cada uno de los datos debe de haber rutas para traer todos los datos, traer un dato por su id, crear un dato, actualizar un dato, eliminar un dato, ademas de rutas para buscar el elemento por alguno de sus campos
  
  Utilizar la paginación para traer los datos
  Utilizar la tecnica de soft delete para eliminar los datos
  La aplicacion no puede crashear, necesitas tener manejo de errores
  Cada esquema debe de tener validaciones de datos

  Fecha de entrega domingo 23 de junio

  2da etapa del proyecto:
  - Crear una interfaz para visualizar cada uno de los datos del proyecto, crear datos, buscar datos, eliminar datos, actualizar datos
  - Los inputs deben de tener validaciones
  - Debe ser responsive
  - En caso de errores o en caso de que todo este bien, debe de enviar mensajes con la informacion adecuada
  Fecha: 02/07/24
*/