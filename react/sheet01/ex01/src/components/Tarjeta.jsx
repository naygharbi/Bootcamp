import React from "react";

function Tarjeta({ nombre, apellido, ocupacion, imagenURL }) {
  return (
    <>
      <div className="card">
        <div className="info">
          <p>Nombre : {nombre}</p>
          <p>Apellido : {apellido}</p>
          <p>Ocupacion : {ocupacion}</p>
          <img src={imagenURL} alt="" />
        </div>
      </div>
    </>
  );
}

export default Tarjeta;
