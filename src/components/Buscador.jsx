import React, { useState } from "react";

function Buscador({ onChange, search }) {
  return (
    <div className="row py-3 ">
        <input
        className="w-25 ms-3"
          type="text"
          placeholder="Buscar un colaborador"
          value={search}
          onChange={onChange}
        />
    </div>
  );
}

export default Buscador;
