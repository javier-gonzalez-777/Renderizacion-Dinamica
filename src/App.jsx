import React from 'react'
import Datos  from './BaseColaboradores'
import Listado from './components/Listado'
import Buscador from './components/Buscador'



const App = () => {
  const datos=(Datos)
  return (
    <div>
      <h3>Lista de colaboradores</h3>
      <Buscador />
      <Listado Datos={datos} /> 
    </div>
  )
}

export default App

