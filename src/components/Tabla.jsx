import React, { useState } from 'react';
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faPaintBrush,
  faBug,
  faCogs,
  faChartLine,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';

import data from '../data/datos.json';

const iconMap = {
  "fa-code": faCode,
  "fa-paint-brush": faPaintBrush,
  "fa-bug": faBug,
  "fa-cogs": faCogs,
  "fa-chart-line": faChartLine,
  "fa-database": faDatabase
};

const TablaI = () => {
  const [modal, setModal] = useState(false);
  const [imagenActual, setImagenActual] = useState('');

  const toggle = () => setModal(!modal);

  const abrirModal = (imagen) => {
    setImagenActual(imagen);
    toggle();
  };

  return (
    <div className="p-4">
      <Table striped bordered hover responsive className="text-center align-middle">
        <thead className="bg-gray-100">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Icono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((registro) => (
            <tr key={registro.id}>
              <td>{registro.id}</td>
              <td>{registro.nombre}</td>
              <td>{registro.puesto}</td>
              <td>
                <FontAwesomeIcon icon={iconMap[registro.icono]} className="text-green-600 text-xl" />
              </td>
              <td>
                <Button color="secondary" onClick={() => abrirModal(registro.imagen)}>
                  Ver Imagen
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Imagen del Registro</ModalHeader>
        <ModalBody>
          <img src={imagenActual} alt="Detalle" className="w-full rounded" />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TablaI;
