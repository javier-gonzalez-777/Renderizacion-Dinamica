import React from 'react'



const Alert = ({error}) => {
  return (
    <>
       {/* {console.log(mensaje)} */}
       {error ? <p  className="error">Completa todos los campos</p> :<p className="error">El Regidtro fue exitoso</p> }
      

    
    </>
  )
}

export default Alert