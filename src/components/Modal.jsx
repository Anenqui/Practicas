import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalA = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="p-4 text-center">
      <Button color="primary" onClick={toggle}>
        Mostrar Modal
      </Button>

      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Modal</ModalHeader>
        <ModalBody>
          Este es el contenido del modal.
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalA;
