import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Noticias from "./components/Noticias";

function App() {
  //codigo JS

  return (
    <div>
      {/* Codigo HTML */}
      <h1>Encabezado 1</h1>
      <h2>Encabezado 1</h2>
      <h3>Titulo del contenedor</h3>
      <h4>Encabezado 1</h4>

      <p>
        Ipsem lorem lerom Ipsem lorem lerom Ipsem lorem lerom Ipsem lorem lerom
        Ipsem lorem lerom Ipsem lorem lerom Ipsem lorem lerom Ipsem lorem lerom
        Ipsem lorem lerom Ipsem lorem lerom Ipsem lorem lerom Ipsem lorem lerom
        Ipsem lorem lerom
      </p>

      <hr></hr>
      <p>separar debajo</p>
      <hr />

      <button>Texto del button</button>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>

      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>

      <Noticias />
    </div>
  );
}

export default App;
