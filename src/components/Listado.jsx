import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { BaseColaboradores } from "../assets/js/BaseColaboradores";



function Listado(props) {
    
  const {lista} = props;

  return (
   
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {lista.map( tarea => 
        <tr key={tarea.id}>
          <td>{tarea.nombre}</td>
          <td>{tarea.correo}</td>
          <td>{tarea.edad}</td>
          <td>{tarea.cargo}</td>
          <td>{tarea.telefono}</td>    
        </tr>
        )}
      </tbody>
    </Table>
   
  )
}

export default Listado;