import React from "react";
import { useState } from "react";
import Alert from "./Alert";
import Listado from "./Listado";
import Datos from "../BaseColaboradores";


const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(false);
  const [listaUsuarios, setListaUsuarios] = useState(Datos);
  //const [idCounter, setIdCounter] = useState(1);
  const [ultimoId, setUltimoId] = useState(Datos.length);

  // const [ListadoNuevo, setListadoNuevo]= useState("")

  const validarInput = (e) => {
    e.preventDefault();

    if (
      nombre === "" ||
      email === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === ""
    ) {
      setError(true);
      //  alert("datos incompletos");
      return;
    }
    setError(false);
    //   alert("datos completos");
    enviarFormulario();
  };
  // Función al enviar el formulario
  const enviarFormulario = (e) => {
    e.preventDefault();
    setListaUsuarios([
      ...listaUsuarios,
      {
        id: ultimoId + 1, // Incrementa el id de manera dinámica
        nombre: nombre,
        email: email,
        edad: edad,
        cargo: cargo,
        telefono: telefono,
      },
    ]); // Agregamos la tarea


    setUltimoId(ultimoId + 1); // Actualiza el último id utilizado

    setNombre("");
    setCargo("");
    setEmail("");
    setEdad("");
    setTelefono("");

    console.log("Arreglo Formulario:", listaUsuarios);
    console.log("Variable cot:", setUltimoId);
  };

  return (
    <>
      <Listado datos={listaUsuarios} />
      <form onSubmit={validarInput}>
        <div className="form-group">
          <input
            placeholder="Nombres"
            className="form-control"
            name="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Edad"
            className="form-control"
            name="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
          <input
            placeholder="Cargo"
            className="form-control"
            name="Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
          <input
            placeholder="Telefono"
            className="form-control"
            name="Telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          <button
            className="btn btn-success mt-3"
            type="submit"
            onClick={enviarFormulario}
          >
            Registrarse
          </button>
          <Alert error={error} />
        </div>
      </form>
    </>
  );
};
export default Formulario;
