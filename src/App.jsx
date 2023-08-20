import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Formulario from './components/Formulario'
import { BaseColaboradores } from "../src/assets/js/BaseColaboradores.js";
import Listado from './components/Listado';
import Buscador from './components/Buscador';


function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  const [lista, setLista] = useState(BaseColaboradores);
  const [search, setSearch] = useState("");

  const listaFiltrada = lista.filter((item) =>
  Object.values(item).some((value) =>
    value.toString().toLowerCase().includes(search.toLowerCase())
  )
)

const handleChange = (e) => {
  setSearch(e.target.value);
};

  return (
  
    <div className="container">
    <h1>Lista de colaboradores</h1>
    
    <Buscador onChange={handleChange} search={search} />
   
    <div className="row">
    <div className="col-md-8">    
      <Listado listaFiltrada={listaFiltrada} lista={lista} setLista={setLista} />
      </div>
      <div className="col-md-4">
      <h2 className='text-center bg-success text-white py-2'>Agregar colaborador</h2>
    <Formulario lista={lista} setLista={setLista} color={color} setColor={setColor} error={error} setError={setError}/>
    </div>
    </div>
    </div>
    
  )
}

export default App
