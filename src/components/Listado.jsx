import React from "react";
import Table from "react-bootstrap/Table";

const Listado = (props) => {
  const { datos } = props;

  return (
    <>
      <Table className="dark table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col" className="text-center align-middle">
              Id
            </th>
            <th scope="col" className="text-center align-middle">
              Nombre
            </th>
            <th scope="col" className="text-center align-middle">
              Correo
            </th>
            <th scope="col" className="text-center align-middle">
              Edad
            </th>
            <th scope="col" className="text-center align-middle">
              Cargo
            </th>
            <th scope="col" className="text-center align-middle">
              Telefono
            </th>
          </tr>
        </thead>
        <tbody>
          {datos.map((objeto, index) => (
            <tr key={index}>
              <td className="text-center align-middle">{objeto.id}</td>
              <td className="text-center align-middle">{objeto.nombre}</td>
              <td className="text-center align-middle">{objeto.email}</td>
              <td className="text-center align-middle">{objeto.edad}</td>
              <td className="text-center align-middle">{objeto.cargo}</td>
              <td className="text-center align-middle">{objeto.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Listado;
