import React from "react";

function Noticias({ valor1, valor2 }) {
  console.log("Desde noticias.jsx: ", valor1 + valor2);

  return (
    <div>
      <h3>Noticias de ultima hora</h3>
      <p>Se revisaron las lineas 1 y 2 de la red electrica</p>
    </div>
  );
}

export default Noticias;
