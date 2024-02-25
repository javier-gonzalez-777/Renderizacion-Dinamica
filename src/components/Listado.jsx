import React from "react";
//import { Datos } from "../BaseColaboradores";

const Listado = (props) => {
  const { datos } = props;
 // console.log("arreglo Listado:", datos);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Telefono</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((objeto, index) => (
            <tr key={index} id={index}>
              <td>{objeto.id}</td>
              <td>{objeto.nombre}</td>
              <td>{objeto.email}</td>
              <td>{objeto.edad}</td>
              <td>{objeto.cargo}</td>
              <td>{objeto.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Listado;
