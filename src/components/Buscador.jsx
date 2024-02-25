import React, { useState } from 'react';

const Buscador = ({ datos, setFiltroColaboradores }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
    const filtro = event.target.value.toLowerCase();
    const colaboradoresFiltrados = datos.filter((colaborador) =>
      Object.keys(colaborador).some(
        (key) =>
          typeof colaborador[key] === 'string' &&
          colaborador[key].toLowerCase().includes(filtro)
      )
    );
    setFiltroColaboradores(colaboradoresFiltrados);
  };

  return (
    <form>
      <input
        type="text"
        value={busqueda}
        onChange={handleBusquedaChange}
        placeholder="Buscar colaboradores..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Buscador;