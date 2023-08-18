import React, { useState } from "react";



function Buscador({ onChange, search }) {

        
   return (
    <>
     <div>
        <input type="text" 
        placeholder="Buscar un colaborador" 
        value={search} 
        onChange={onChange}
        />
     </div>
    </>
    )
}

export default Buscador;