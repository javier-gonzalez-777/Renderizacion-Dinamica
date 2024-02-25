import React from "react";
import { useState } from "react";
import Alert from "./Alert";
import Listado from "./Listado";
import Datos from "../BaseColaboradores";


const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(false);
  const [listaUsuarios, setListaUsuarios] = useState(Datos);
  const [ultimoId, setUltimoId] = useState(Datos.length);
  const [mensaje, setMensaje] = useState("");

  // const [ListadoNuevo, setListadoNuevo]= useState("")

  
  const enviarFormulario = (e) => {
    e.preventDefault();
    //*** Validar **/
 
    if (
      nombre === "" ||
      email === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === ""
    ) {
      setError(true);
      setMensaje("Completa todos los campos");
      return;
    }
    //setError(false);
    
    //**fin Validar */

    
    const nuevoColaborador = {
      id: ultimoId + 1, // Incrementa el id de manera dinámica //Math.floor(Math.random() * 1000), // Generar un id aleatorio
      nombre: nombre,
      email: email,
      edad: edad,
      cargo: cargo,
      telefono: telefono,
    };

    agregarColaborador(nuevoColaborador);
    
    setError(false);
    setMensaje("El registro fue exitoso");

    setUltimoId(ultimoId + 1); // Actualiza el último id utilizado

    setNombre("");
    setEmail("");
    setEdad("");
    setCargo("");
    setTelefono("");

    
  };
   

  return (
    <>
      {/* <Listado datos={listaUsuarios} /> */}
      {/* <Listado datos={listaUsuarios} /> */}
      <form onSubmit={enviarFormulario}>
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
          >
            Registrarse
          </button >
          {error && <Alert mensaje={mensaje} />}
        </div>
      </form>
    </>
  );
};
export default Formulario;
