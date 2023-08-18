import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
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
  
    <div className="container">
    <h1>Lista de colaboradores</h1>
    <Buscador lista={lista} setLista={setLista} listaoriginal={listaoriginal}/>
    <div className="row">
    <div className="col-md-8">    
      <Listado lista={lista} setLista={setLista} />
      </div>
      <div className="col-md-4">
    <Formulario lista={lista} setLista={setLista} color={color} setColor={setColor} error={error} setError={setError}/>
    </div>
    </div>
    </div>
    
  )
}

export default App
