import React, { useState } from "react";
import Datos from "./BaseColaboradores";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";

const App = () => {
  const [listaUsuarios, setListaUsuarios] = useState(Datos);
  const [filtroColaboradores, setFiltroColaboradores] = useState(Datos);

  const agregarColaborador = (nuevoColaborador) => {
    const nuevosUsuarios = [...listaUsuarios, nuevoColaborador];
    setListaUsuarios(nuevosUsuarios);
    setFiltroColaboradores(nuevosUsuarios);
  };

  return (
    <>
      <div className="contenedor mx-auto">
        <h3 className="indice">Lista de colaboradores</h3>
        <Buscador
          datos={listaUsuarios}
          setFiltroColaboradores={setFiltroColaboradores}
        />
        <Listado datos={filtroColaboradores} />
        <h3>Agregar colaborador</h3>
        <Formulario agregarColaborador={agregarColaborador} />
      </div>
    </>
  );
};

export default App;
