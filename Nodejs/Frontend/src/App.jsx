import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:3001/productos").then((res) => {
      setData(res.data)
    })
  }
  , [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const nombre = e.target.nombre.value
    const precio = e.target.precio.value

    axios.post("http://localhost:3001/productos", { nombre, precio }).then((res) => {
      console.log(res)
    })
  }

  const updateProduct = (e) => {
    e.preventDefault()
    let filter = {}
    const id = e.target.id.value
    if(e.target.nombre.value) filter.nombre = e.target.nombre.value
    if(e.target.precio.value) filter.precio = e.target.precio.value
    console.log(filter)

    axios.patch(`http://localhost:3001/productos/${id}`, filter).then((res) => {
      console.log(res)
    })
  }

  const deleteProduct = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:3001/productos/${e.target.id.value}`).then((res) => {
      console.log(res)
    })
  }

  if(!data) return <h1>Cargando...</h1>

  return (
    <>
      <h1>Productos</h1>
      <ul>
        {data && data.docs.map((product) => (
          <li key={product._id}>{product.nombre}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="number" name="precio" placeholder="Precio" />
        <button type="submit">Crear</button>
      </form>

      <form onSubmit={updateProduct}>
        <input type="text" name="id" placeholder="Id" />
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="number" name="precio" placeholder="Precio" />
        <button type="submit">Actualizar</button>
      </form>

      <form onSubmit={deleteProduct}>
        <input type="text" name="id" placeholder="Id" />
        <button type="submit">Eliminar</button>
      </form>
    </>
  )
}

export default App
