import Nav from "../components/Nav";
import Button from "../components/Button";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../components/DarkModeContext"; // Importa el contexto, no el componenteImporta

function Class1() {
  const input = useRef(null);
  const { darkMode, setDarkMode } = useContext(DarkModeContext); // Utiliza DarkModeContext en lugar de DarkMode
  const handleClick = () => {
    console.log(input);
    input.current.classList.add("bg-red-500");
    alert(input.current.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Cambia el estado de darkMode
    console.log(darkMode);
  };

  return (
    <>
      <Nav />
      <div className={darkMode ? "bg-gray-600" : "bg-white"}>
        <Button />
        <Button
          text="Haz click"
          classes="bg-blue-600"
          event={() => {
            alert("Hola");
          }}
        />
        <Button text="Registro" classes="bg-yellow-600" />
        <input ref={input} type="text" />
        <button onClick={handleClick}>Mostrar</button>
        <Link to="/api">Api</Link>
        <button>Cambiar</button>
        <button onClick={toggleDarkMode}>Cambiar</button>{" "}
        {/* Usa toggleDarkMode para cambiar el estado de darkMode */}
      </div>
    </>
  );
}

export default Class1;
