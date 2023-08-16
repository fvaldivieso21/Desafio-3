import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import { BaseColaboradores } from "../src/assets/js/BaseColaboradores.js";
import Listado from './components/Listado';

function App() {
  
  const [lista, setLista] = useState(BaseColaboradores);

  return (
    <>
      <Formulario lista={lista} setLista={setLista}/>

      <Listado lista={lista}/>
    </>
  )
}

export default App
