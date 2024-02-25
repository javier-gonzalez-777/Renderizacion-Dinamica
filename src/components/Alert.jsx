import React from "react";

const Alert = ({ error }) => {
  return (
    <>
      {/* {console.log(mensaje)} */}
      {error ? (
        <p className="error">Completa todos los campos</p>
      ) : (
        <p className="error">El Regidtro fue exitoso</p>
      )}
    </>
  );

  return mensaje.includes("agregado") || mensaje.includes("eliminado")
    ? "alert bg-info"
    : "alert bg-danger";
};

export default Alert;
