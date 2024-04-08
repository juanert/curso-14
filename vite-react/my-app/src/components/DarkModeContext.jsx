import { createContext, useState } from "react";
import propTypes from "prop-types";

export const DarkModeContext = createContext(); // Exporta el contexto con el nombre DarkModeContext

function DarkMode({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

DarkMode.propTypes = {
  children: propTypes.node,
};

export default DarkMode;