import React, { useState } from 'react';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BotonA = () => {
  const [visible, setVisible] = useState(false);

  const toggleToast = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative min-h-[200px] p-4 flex items-center justify-center">
      <Button color="primary" onClick={toggleToast} className="mb-4">
        Mostrar Notificación
      </Button>

      {visible && (
        <div className="fixed top-4 right-4 min-w-[250px] z-[9999]">
          <Toast className="bg-blue-600 text-white shadow-lg rounded">
            <ToastHeader icon="primary" toggle={toggleToast}>
              Notificación
            </ToastHeader>
            <ToastBody>
              ¡Hola!
            </ToastBody>
          </Toast>
        </div>
      )}
    </div>
  );
};

export default BotonA;
