import { createContext, useState } from "react";
import Button from "./Button";

function Nav() {
  const DarkModeContext = createContext();
  /*
    Los hooks son funciones de javascript que retornan logica
    Los hooks no pueden ser llamados en loops, condicionales o funciones anidadas
    Los hooks deben ser llamados en el nivel mas alto de un componente
    Los hooks siempre comienzan con "use"
  */
  const [darkMode, setDarkMode] = useState(false);
  const styles = {
    dark: "bg-gray-800 text-white",
    light: "bg-white text-black",
    row: "flex justify-between items-center p-4",
  };
  return (
    <>
      <DarkModeContext.Provider value={darkMode}>
        <nav
          className={
            darkMode
              ? `${styles.row} ${styles.dark}`
              : `${styles.row} ${styles.light}`
          }
        >
          <div>Logo</div>
          <div>
            <Button
              event={() => {
                setDarkMode(!darkMode);
              }}
              text="Oscuro"
            />
          </div>
        </nav>
      </DarkModeContext.Provider>
    </>
  );
}

export default Nav;
