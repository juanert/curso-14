const express = require('express'); //requerir express
const mongoose = require('mongoose'); //requerir mongoose
const app = express(); //ejecutar express
const port = 3001; //crear un puerto
app.use(express.json()); //usar json

//conectar a la base de datos
mongoose.connect('mongodb://localhost:27017/nodejs');

//crear un esquema (La estructura de la colección)
const Schema = mongoose.Schema;

const productosSchema = new Schema({
  nombre: {type: String, required: true, unique: true, min: 3, max: 50},
  precio: {type: Number, required: true},
  gratis: {type: Boolean, default: false},
});

//crear un modelo (La colección en la base de datos)
const Productos = mongoose.model('Productos', productosSchema);

//mi primera ruta
app.get('/', (req,res) => {
  res.send('Hola Mundo');
});

//mi segunda ruta
app.get('/productos', async (req,res) => {
  const productos = await Productos.find();
  res.json(productos);
});

//Ruta con parametros
app.get('/productos/:id', async (req,res) => {
  const producto = await Productos.findById(req.params.id);
  res.json(producto);
});

//Ruta POST
app.post('/productos', async (req,res) => {
  const {nombre, precio, gratis} = req.body;
  const producto = new Productos({nombre, precio, gratis});
  await producto.save();
  res.status(201).json(producto);
});

//Ruta Delete
app.delete('/productos/:id', async (req,res) => {
  const producto = await Productos.findByIdAndDelete(req.params.id);
  res.json(producto);
});

//Ruta PUT
app.put('/productos/:id', async (req,res) => {
  const {nombre, precio, gratis} = req.body;
  const producto = await Productos.findByIdAndUpdate(req.params.id, {nombre, precio, gratis}, {new: true});
  res.json(producto);
});

//Ruta PATCH
app.patch('/productos/:id', async (req,res) => {
  const {nombre, precio, gratis} = req.body;	
  const producto = await Productos.findByIdAndUpdate(req.params.id, {nombre, precio, gratis}, {new: true});
  res.json(producto);
});

//Ruta con query (Parametros opcionales)
app.get('/productos/:id/comentarios', (req,res) => {
  res.json({producto: req.params.id, comentarios: req.query.comentarios});
});

//escucho al puerto que cree
app.listen(port, () => {
    console.log('Me ejecuto en el puerto ' + port);
});
