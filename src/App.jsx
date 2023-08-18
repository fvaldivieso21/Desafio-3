import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import { BaseColaboradores } from "../src/assets/js/BaseColaboradores.js";
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Alert from "./components/Alert";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  const [lista, setLista] = useState(BaseColaboradores);
  const [listaoriginal, setListaOriginal] = useState(BaseColaboradores);

  return (
    <>
    <h1>Lista de colaboradores</h1>
    <Buscador lista={lista} setLista={setLista} listaoriginal={listaoriginal}/>
    <Listado lista={lista} setLista={setLista} />
    <Formulario lista={lista} setLista={setLista} color={color} setColor={setColor} error={error} setError={setError}/>
    </>
  )
}

export default App
