import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/general.css";
import * as Pages from "./pages/Pages";
import DarkModeContext from "./components/DarkModeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Class1></Pages.Class1>} />
          <Route path="/api" element={<Pages.Api></Pages.Api>} />
          <Route path="/apikey" element={<Pages.ApiKey></Pages.ApiKey>} />
          <Route path="/*" element={<h1>No existe</h1>} />
        </Routes>
      </BrowserRouter>
    </DarkModeContext>
  </React.StrictMode>
);

/*
  Ejericio 1:
  - realiza el piedra papel o tijera con react usando useState y componentes

  Ejercicio 2:
  - Realiza el juego de tres en raya con react usando useState y componentes

  Fecha limite 24/03/24
*/
