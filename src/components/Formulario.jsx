import { useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/Formulario.css";
import Form from 'react-bootstrap/Form';
import Alert from "./Alert";
import { v4 as Uuidv4 } from "uuid";





function Formulario({ lista, setLista }) {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");
  const [color, setColor] = useState("");


  function validarEmail(email) {
    const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return expresionRegular.test(email);
  }

  const validarInput = (e) => {
    e.preventDefault();
    if (!nombre == '' && !email == '' && !edad == 0 && !cargo == '' && !telefono == 0) {
      if (validarEmail(email)) {
        const id = Uuidv4();
        const newList = [...lista, { id: id, nombre: nombre, correo: email, edad: edad, cargo: cargo, telefono: telefono }];
        setLista(newList);
        setNombre("");
        setEmail("");
        setEdad("");
        setCargo("");
        setTelefono("");
        setError("Colaborador agregado!");
        setColor('green');
      } else {
        setError("El formato del Email es incorrecto");
        setColor('red');
      }
    } else {
      setError("Debe llenar todos los campos");
      setColor('red');
    }


  };

  return (


    <Form onSubmit={validarInput}>


      <div className="form-group">
        <input className="form-control mb-3" placeholder="Ingrese nombre" name="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>

      <div className="form-group">
        <input className="form-control mb-3" placeholder="Ingrese email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <input className="form-control mb-3" type="number" placeholder="Ingrese Edad" name="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
      </div>

      <div className="form-group">
        <input className="form-control mb-3" placeholder="Ingrese cargo" name="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
      </div>

      <div className="form-group">
        <input className="form-control mb-3" type="number" placeholder="Ingrese Telefono" name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </div>


      <button className="btn btn-dark mt-3 w-100 bg-success" type="submit">
        Agregar colaborador
      </button>
      <Alert error={error} color={color} />
    </Form>


  );
}

export default Formulario;