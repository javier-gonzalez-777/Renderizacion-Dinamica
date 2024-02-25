import React from "react";
import Datos from "./BaseColaboradores";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <div>
      <h3>Lista de colaboradores</h3>
      <Buscador datos={Datos}/>
      
      {/* <Listado datos={Datos} />   */}
      <h3>Agregar colaborador</h3>
      <Formulario />
    </div>
  );
};

export default App;
