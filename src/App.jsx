import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import { BaseColaboradores } from "../src/assets/js/BaseColaboradores.js";
import Listado from './components/Listado';
import Buscador from './components/Buscador';

function App() {
  
  const [lista, setLista] = useState(BaseColaboradores);
  const [listaoriginal, setListaOriginal] = useState(BaseColaboradores);

  return (
    <>
      <Formulario lista={lista} setLista={setLista}/>
      <Buscador lista={lista} setLista={setLista} listaoriginal={listaoriginal}/>

      <Listado lista={lista} setLista={setLista} />
    </>
  )
}

export default App
