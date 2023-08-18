import React from "react";
import { Table, Button } from "react-bootstrap";

function Listado(props) {
  const { lista, setLista } = props;

  const eliminarColaborador = (id) => {
    const updatedList = lista.filter((colaborador) => colaborador.id !== id);
    setLista(updatedList);
  };

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {lista.map((tarea) => (
          <tr key={tarea.id}>
            <td>{tarea.nombre}</td>
            <td>{tarea.correo}</td>
            <td>{tarea.edad}</td>
            <td>{tarea.cargo}</td>
            <td>{tarea.telefono}</td>
            <td>
              <Button variant="danger" onClick={() => eliminarColaborador(tarea.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Listado;
