import React from 'react';

const Listado = ({Datos}) => {
 // console.log(datos);
  return(
  <>
  <table class="table">
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
    {Datos.map((Datos,id) =>(
        <tr key={id}>
        <td>{Datos.id}</td>  
        <td>{Datos.nombre}</td>
        <td>{Datos.correo}</td>
        <td>{Datos.edad}</td>
        <td>{Datos.cargo}</td>
        <td>{Datos.telefono}</td>
      </tr> 
      
    ))}
  </tbody>
</table>

</>
  )
}

export default Listado
