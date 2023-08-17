import React, { useState } from "react";



function Buscador({lista,setLista}) {

    const [texto, setTexto] = useState("");

    const [...newlista] = lista.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(texto.toLowerCase())
    )
  )

    return (
    <>
     <div>
        <input type="text" placeholder="Buscar un colaborador" value={texto} onChange={(e) => setTexto(e.target.value)} />
     </div>
    </>
    )
}

export default Buscador;