import React, { useState } from "react";



function Buscador({lista,setLista,listaoriginal}) {

    const [texto, setTexto] = useState("");
    
    

    function handleChange(e) {
      setTexto(e.target.value);
      console.log(texto);
      setLista(listaoriginal.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(e.target.value.toLowerCase())
      )
    ));

    }

    

    return (
    <>
     <div>
        <input type="text" 
        placeholder="Buscar un colaborador" 
        value={texto} 
        onChange={handleChange}
        />
     </div>
    </>
    )
}

export default Buscador;